import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./Home.css";

function Home() {
  const nombreTienda = "Nombre de la tienda";
  return (
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content">
        <h1 className="welcome-header">¡Bienvenido a {nombreTienda}!</h1>
        <p className="welcome-message">
          Estás en el lugar adecuado para administrar y hacer crecer tu tienda de celulares.
        </p>
        <p className="welcome-message">
          Explora las opciones de administración y aprovecha al máximo tu tienda en línea.
        </p>
        <p className="welcome-message">
          ¡Estamos emocionados de tenerte aquí!
        </p>
      </div>
    </div>
  );
}

export default Home;
