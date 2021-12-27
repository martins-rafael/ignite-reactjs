import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

import styles from "../styles/Home.module.css";

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

type Results = {
  totalPrice: number;
  data: Product[];
};

const Home = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products: Product[] = data.map((product: Product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((total: number, product: Product) => {
      return total + product.price;
    }, 0);

    setResults({ data: products, totalPrice });
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Busca</h1>

      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          className={styles.input}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />

        <button type="submit" className={styles.button}>Buscar</button>
      </form>

      <SearchResults results={results.data} totalPrice={results.totalPrice} onAddToWishList={addToWishList} />
    </div>
  );
};

export default Home;
