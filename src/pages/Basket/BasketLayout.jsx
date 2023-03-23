import './BasketLayout.css';
import { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../contexts/BasketProvider';
import deleteImg from '../../img/delete.png';

export function BasketLayout() {
  const { products, removeProductFromBasket, incrementCount, decrementCount } = useContext(BasketContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    products.forEach((product) => {
      let totalProductPrice = product.price * product.count;
      price += totalProductPrice;
    })

    setTotalPrice(price)
  }, [products])

  return (
    <div className='container-basket'>
      <div className='basket-subpage'>
        <p className='your-basket'>Twój koszyk</p>
        <div className='basket-list'>
          {products.map(({ id, img, name, price, count }) => (
            <div className='added-product' key={id}>
              <Link className="link" to={`/${id}`}><img className='b-img' src={img} alt="Bukiet Kwiatów" /></Link>
              <Link className="link" to={`/${id}`}><p className='basket-name'>{name}</p></Link>
              <p className='b-price'>Cena za bukiet:<br />{price}zł</p>
              <div className='b-quantity'>
                <p className='b-quantity-plus-minus' onClick={() => decrementCount(id)}>-</p>
                <p className='b-quantity-number'>{count}</p>
                <p className='b-quantity-plus-minus' onClick={() => incrementCount(id)}>+</p>
              </div>
              <p className='total-price'>Razem:<br />{count * price} zł</p>
              <img className='delete' src={deleteImg} alt="Usuń" onClick={() => removeProductFromBasket(id)} />
            </div>
          ))}
        </div>
        <div className='basket-total-price'>
          <p>Do zapłaty:</p>
          <p className='total-p'>{totalPrice} zł</p>
        </div>
        <Link className='basket-btn' to={'/'}>Przejdź dalej</Link>
      </div>
    </div>
  )
}
