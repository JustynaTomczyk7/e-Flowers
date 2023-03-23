import './Navigation.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BasketContext } from '../contexts/BasketProvider';
import logo from '../img/logo.svg';
import shoppingBasket from '../img/shopping-basket.png';

export function Navigation() {
  const { products } = useContext(BasketContext);

  return (
    <nav>
      <div className="container">
        <Link to="/" className='logo'>
          <img className='img-logo' src={logo} alt="Logo" />
          <p className='text-logo'>e-Flowers</p>
        </Link>
        <div className='contact-basket'>
        <div className='contact'>
          <p className='number'>Zadzwoń: 500 600 500</p>
        </div>
        <Link to={'koszyk'} className='shopping-basket'>
          <img className='img-shopping-basket' src={shoppingBasket} alt="Shopping cart" />
          <span className={`${products.length !== 0 ? '' : 'display-none'}`}></span>
        </Link>
        </div>
      </div>
    </nav>
  )
}