import { useState, createContext, useEffect } from "react";
import { products as productsData } from "../consts/products";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProductToBasket = (productId, count) => {
    const isProductInProducts = products.find(
      (product) => product.id === productId
    );

    if (isProductInProducts) {
      setProducts((values) =>
        values.map((value) => {
          if (value.id === productId) {
            return {
              ...value,
              count: value.count + count,
            };
          }
          return value;
        })
      );
    } else {
      const product = productsData.find((product) => product.id === productId);

      if (product) {
        setProducts((value) => [
          ...value,
          {
            ...product,
            count,
          },
        ]);
      }
    }
  };

  const removeProductFromBasket = (productId) => {
    setProducts((values) => values.filter((value) => value.id !== productId));
  };

  const incrementCount = (productId) => {
    setProducts((values) =>
      values.map((value) => {
        if (value.id === productId) {
          return {
            ...value,
            count: value.count + 1,
          };
        }
        return value;
      })
    );
  };

  const decrementCount = (productId) => {
    setProducts((values) =>
      values.map((value) => {
        if (value.id === productId) {
          return {
            ...value,
            count: value.count === 0 ? 0 : value.count - 1,
          };
        }
        return value;
      })
    );
  };

  return (
    <BasketContext.Provider
      value={{
        products,
        addProductToBasket,
        removeProductFromBasket,
        incrementCount,
        decrementCount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
