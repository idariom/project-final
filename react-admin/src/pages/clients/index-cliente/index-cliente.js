import React from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import "./index-cliente.css";

function IndexCliente() {
  return (
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content">
        <h1>Listado de todos los clientes registrados</h1>
        <table>
          <thead>
            <tr>
              <th>Encabezado 1</th>
              <th>Encabezado 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IndexCliente;
