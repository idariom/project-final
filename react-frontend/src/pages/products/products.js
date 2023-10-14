import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./products.css";

function Products() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const url = "http://localhost:3300/api/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}listar_productos_public`);
        setProductos(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  // Filtrar productos según la cadena de búsqueda
  const productosFiltrados = productos.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main className="cs-page-wrapper">
        <nav className="bg-secondary mb-3" aria-label="breadcrumb">
          <div className="container">
            <ol className="breadcrumb breadcrumb-alt mb-0">
              <li className="breadcrumb-item">
                <a>
                  <i className="cxi-home"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Todos los productos
              </li>
            </ol>
          </div>
        </nav>

        <section className="container pt-3 pb-5 pb-md-6 mb-2 mb-lg-0">
          <div className="row mb-lg-5">
            <div className="col-md-12">
              <div className="card bg-dark text-white">
                <img
                  src="https://images8.alphacoders.com/131/1317147.jpeg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Tienda</h5>
                  <p className="card-text">
                    Descubre un mundo de posibilidades en nuestra tienda:
                    ¡productos que satisfacen tus deseos y necesidades!
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar un producto..."
              value={busqueda}
              onChange={handleBusquedaChange}
            />
          </div>

          <div className="products-container">
            {productosFiltrados.map((item) => (
              <div key={item.titulo} className="product-item">
                <h3>{item.titulo}</h3>
                <img
                  src={`${url}obtener_portada/${item.portada}`}
                  alt={item.titulo}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <button className="comprar-button">Comprar</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Products;
