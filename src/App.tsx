import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Basket } from "./pages/Basket/Basket";
import { BasketProvider } from "./contexts/BasketProvider";

export function App() {
  return (
    <div className="App">
      <BasketProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":id" element={<ProductDetail />} />
            <Route path="koszyk" element={<Basket />} />
          </Route>
        </Routes>
      </BasketProvider>
    </div>
  );
}
