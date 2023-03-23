import './Product.css';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../contexts/BasketProvider';

export function Product({ id, name, price, img }) {
  const [count, setCount] = useState(1);
  const { addProductToBasket } = useContext(BasketContext);

  const incrementCount = () => {
    if (count >= 0 && count < 100) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0 && count <= 100) {
      setCount(count - 1);
    }
  };

  const addToBasket = () => {
    addProductToBasket(id, count);
  }

  return (
    <div className='container'>
      <div className='product-subpage'>
        <p className='product-name'>{name}</p>
        <div className='product-detail'>
          <div className='product-img'>
            <img className='p-img' src={img} alt="Bukiet Kwiatów" />
          </div>
          <div className='quantity-price'>
            <div className='quantity'>
              <p>Wybierz ilość:</p>
              <p className='quantity-plus-minus minus' onClick={decrementCount}>-</p>
              <p className='quantity-number'>{count}</p>
              <p className='quantity-plus-minus' onClick={incrementCount}>+</p>
            </div>
            <div className='product-price'>
              <p className='p-description'>Cena bukietu:</p>
              <p className='p-price'>{price}zł</p>
            </div>
            <Link className='p-add-to-cart' to={'/koszyk'} onClick={addToBasket}>Przejdź do koszyka</Link>
          </div>
        </div>
      </div>
    </div>
  )
}