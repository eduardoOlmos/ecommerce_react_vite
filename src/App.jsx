import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPages } from "./pages/LoginPages";
import { CarPages } from "./pages/CarPages";
import { ProductsPage } from "./pages/ProductsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthProvider";
import { ProductProvider } from "./context/ProducProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="car" element={<CarPages />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </>
  );
};

export default App;
