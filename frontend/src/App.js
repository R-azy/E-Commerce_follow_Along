import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignupPage from "./Pages/SignupPage.jsx";
import { LoginPage,SignupPage,Home,CreateProduct } from './Routes.js';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/create-product' element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;