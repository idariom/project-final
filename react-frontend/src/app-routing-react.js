import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import About from "./pages/about/about";
import Contacts from "./pages/contacts/contacts";

function AppRoutingReact() {
  return (
    <Router>
      <Routes>
        {/* Ruta de redirección */}
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />

      </Routes>
    </Router>
  );
}

export default AppRoutingReact;