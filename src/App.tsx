import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import ProductPage from './pages/product/ProductPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App