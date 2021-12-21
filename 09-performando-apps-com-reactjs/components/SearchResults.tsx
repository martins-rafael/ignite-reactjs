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
  const totalPrice = results.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};