import "./Header.css";
import baner from "../../img/baner.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-text">
          <h2>
            Spraw, aby Ten dzień był
            <br />
            Wyjątkowy!
          </h2>
          <p>Zamów świeże kwiaty z dostawą prosto do domu.</p>
          <button
            className="btn-header"
            onClick={() =>
              document
                .querySelector("#products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Sprawdź ofertę
          </button>
        </div>
      </div>
      <img className="img-header" src={baner} alt="Baner" />
    </header>
  );
}
