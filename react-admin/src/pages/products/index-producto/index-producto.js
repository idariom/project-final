import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import "./index-producto.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function IndexProducto() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPorPagina = 10;
  const token = localStorage.getItem("token");
  const url = "http://localhost:3300/api/";
  const navigate = useNavigate();

  useEffect(() => {
    init_data();
  }, [filtro]);

  const init_data = () => {
    listarProductosAdmin(filtro, token)
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const listarProductosAdmin = (filtro, token) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    return axios
      .get(`${url}listar_productos_admin/${filtro}`, { headers })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };
  const eliminarProducto = (productId) => {
    // Puedes mostrar una confirmación para asegurarte de que el usuario desea eliminar el producto
    const confirmarEliminacion = window.confirm(
      "¿Seguro que deseas eliminar este producto?"
    );
    if (!confirmarEliminacion) {
      return;
    }

    // Llamada a la API para eliminar el producto
    axios
      .delete(`http://localhost:3300/api/eliminar_producto_admin/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Producto eliminado correctamente");
          // Puedes actualizar la lista de productos en el estado o recargar la lista
        }
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
        alert(
          "Producto eliminado correctamente"
        );
        navigate('/panel/productos');
      });
  };

  return (
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content">
        <h1>Listado de todos los productos registrados</h1>
        <a href="/panel/productos/registro">Registrar nuevo</a>
        <div className="table-responsive">
          <table className="table table-sm table-nowrap card-table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((item) => (
                <tr key={item._id}>
                  <td>
                    <h6 style={{ paddingBottom: 0, marginBottom: 0 }}>
                      <img
                        className=""
                        style={{ width: "60px" }}
                        src={`${url}obtener_portada/${item.portada}`}
                        alt=""
                      />
                    </h6>
                    {item.titulo}
                  </td>
                  <td>{item.stock}</td>
                  <td>${item.precio}</td>
                  <td>{item.categoria}</td>
                  <td>
                    <a
                      className="dropdown-item"
                      href={`/panel/productos/${item._id}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </a>
                  </td>
                  <td>
                    <a
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => eliminarProducto(item._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-archive"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IndexProducto;
