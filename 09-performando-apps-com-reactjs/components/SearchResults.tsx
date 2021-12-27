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
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
};