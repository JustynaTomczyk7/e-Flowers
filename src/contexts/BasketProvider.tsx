import { useState, createContext, useEffect, PropsWithChildren } from "react";
import { products as productsData } from "../consts/products";

type BasketContextType = {
  products: Product[];
  addProductToBasket: (productId: string, count: number) => void;
  removeProductFromBasket: (productId: string) => void;
  incrementCount: (productId: string) => void;
  decrementCount: (productId: string) => void;
};

// @ts-ignore
export const BasketContext = createContext<BasketContextType>();

type Product = {
  id: string;
  img: string;
  name: string;
  price: number;
  count: number;
};

export function BasketProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem("products") || "") || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProductToBasket = (productId: string, count: number) => {
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

  const removeProductFromBasket = (productId: string) => {
    setProducts((values) => values.filter((value) => value.id !== productId));
  };

  const incrementCount = (productId: string) => {
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

  const decrementCount = (productId: string) => {
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
