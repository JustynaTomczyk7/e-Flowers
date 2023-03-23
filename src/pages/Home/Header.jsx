import './Header.css';
import baner from '../../img/baner.png';

export function Header() {
  return (
    <header>
      <div className="container">
        <div className='header-text'>
          <h2>Spraw, aby Ten dzień był<br />Wyjątkowy!</h2>
          <p>Zamów świeże kwiaty z dostawą prosto do domu.</p>
          <a className='btn-header' href="#products">Sprawdź ofertę</a>
        </div>
      </div>
      <img className='img-header' src={ baner } alt="Baner" />  
    </header>
  )
}