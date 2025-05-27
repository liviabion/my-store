import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import ProductPage from './pages/product/ProductPage';
import Cart from './pages/cart/Cart';
import Orders from './pages/order/OrdersPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="*" element={<div className="text-center pt-24">Página não encontrada.</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App