import { ProductItem } from "./ProductItem";

type Product = {
  id: number;
  price: number;
  title: string;
};

type SearchResultsProps = {
  results: Product[];
};

export const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div>
      {results.map(product => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};