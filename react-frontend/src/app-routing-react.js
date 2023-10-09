import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function AppRoutingReact() {
  return (
    <Router>
      <Routes>
        {/* Ruta de redirección */}
        <Route path="/" element={<Navigate to="/home" />} />

      </Routes>
    </Router>
  );
}

export default AppRoutingReact;