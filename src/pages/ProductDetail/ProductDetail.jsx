import { products } from "../../consts/products";
import { useParams } from "react-router-dom";
import { Product } from "./Product";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <h1>Taka podstrona nie istnieje!</h1>;
  }

  return (
    <Product
      id={product.id}
      name={product.name}
      price={product.price}
      img={product.img}
    />
  );
}
