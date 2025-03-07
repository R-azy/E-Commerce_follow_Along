import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; // Import directly
import SignupPage from "./pages/SignupPage";
import "./App.css";
import Home from "./pages/Home";
import CreateProduct from "./pages/createProduct";
import MyProducts from "./pages/myProducts";
import Cart from "./pages/cart";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/profile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;