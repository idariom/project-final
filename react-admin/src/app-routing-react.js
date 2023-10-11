import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import IndexCliente from "./pages/clients/index-cliente/index-cliente";
import IndexProducto from "./pages/products/index-producto/index-producto";
import UpdateProducto from "./pages/products/update-producto/update-producto";
import CreateProducto from "./pages/products/create-producto/create-producto";

function AppRoutingReact() {
  return (
    <Router>
      <Routes>
        {/* Ruta de redirección */}
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas anidadas */}
        <Route path="/panel/clientes" element={<IndexCliente />} />

        <Route path="/panel/productos" element={<IndexProducto />} />
        <Route path="/panel/productos/registro" element={<CreateProducto />} />
        <Route path="/panel/productos/:id" element={<UpdateProducto />} />

      </Routes>
    </Router>
  );
}

export default AppRoutingReact;


