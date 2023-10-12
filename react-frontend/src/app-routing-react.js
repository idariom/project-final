import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/home";

function AppRoutingReact() {
  return (
    <Router>
      <Routes>
        {/* Ruta de redirección */}
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default AppRoutingReact;