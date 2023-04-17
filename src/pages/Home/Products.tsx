import "./Products.css";
import { products } from "../../consts/products";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../contexts/BasketProvider";

export function Products() {
  const { addProductToBasket } = useContext(BasketContext);

  return (
    <div className="container-products">
      <section className="products" id="products">
        {products.map(({ id, img, name, price }) => (
          <div className="product" key={id}>
            <Link className="add" to={`/${id}`}>
              <img className="img-product" src={img} alt="Bukiet Kwiatów" />
              <p className="name">{name}</p>
              <p className="price">{price}zł</p>
            </Link>
            <Link
              className="add-to-cart"
              to={"koszyk"}
              onClick={() => addProductToBasket(id, 1)}
            >
              Dodaj do koszyka
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
