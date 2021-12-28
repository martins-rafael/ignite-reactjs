import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from "./ProductItem";

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

type SearchResultsProps = {
  totalPrice: number;
  results: Product[];
  onAddToWishList: (id: number) => void;
};

export const SearchResults = ({ results, totalPrice, onAddToWishList }: SearchResultsProps) => {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  }
  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        width={900}
        height={300}
        rowHeight={30}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};