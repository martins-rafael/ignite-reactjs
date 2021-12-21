type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  }
};

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div style={{marginBottom: "1rem"}}>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};