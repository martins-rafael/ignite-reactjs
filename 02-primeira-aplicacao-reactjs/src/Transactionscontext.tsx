import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  type: string
  category: string
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);

  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}