import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import axios from "axios";
import "./index-cliente.css";

function IndexCliente() {
  const [clientes, setClientes] = useState([]);
  const [clientes_const, setClientesConst] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    // Lógica para realizar la solicitud GET y obtener la lista de clientes
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3300/api/listar_clientes_tienda", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        setClientes(response.data.data);
        setClientesConst(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez al montar el componente

  const filtrarCliente = () => {
    if (filtro) {
      const term = new RegExp(filtro.trim(), "i");
      const clientesFiltrados = clientes_const.filter(
        (item) =>
          term.test(item.nombres) ||
          term.test(item.apellidos) ||
          term.test(item.email) ||
          term.test(item.dni) ||
          term.test(item.telefono) ||
          term.test(item._id)
      );
      setClientes(clientesFiltrados);
    } else {
      // Restablecer la lista completa
      setClientes(clientes_const);
    }
  };

  return (
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content">
        <h1>Listado de todos los clientes registrados:</h1>
        <input
          type="text"
          placeholder="Filtrar clientes"
          value={filtro}
          onChange={(e) => {
            setFiltro(e.target.value);
            filtrarCliente();
          }}
        />
        <div className="table-container">
          <table className="table table-warning table-striped">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Pais</th>
              </tr>
            </thead>
            <tbody>
              {clientes
                .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
                .map((item) => (
                  <tr key={item._id}>
                    <td>
                      {item.nombres} {item.apellidos}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.telefono ? item.telefono : "No registrado"}</td>
                    <td>{item.pais ? item.pais : "No registrado"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IndexCliente;
