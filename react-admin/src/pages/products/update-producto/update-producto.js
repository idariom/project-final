import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import axios from "axios"; // Importar Axios
import { useParams } from "react-router-dom";
import "./update-producto.css";

function UpdateProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState({
    titulo: "",
    stock: 0,
    precio: 0,
    categoria: "",
    descripcion: "",
    contenido: "",
  });
  const [file, setFile] = useState(null);
  const [imgSelect, setImgSelect] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const url = "http://localhost:3300/api"; 

  useEffect(() => {
    axios
      .get(`${url}/obtener_producto_admin/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setProducto(data);
        setImgSelect(`${url}/obtener_portada/${data.portada}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productoActualizado = {
      titulo: producto.titulo,
      stock: producto.stock,
      precio: producto.precio,
      descripcion: producto.descripcion,
      contenido: producto.contenido,
      categoria: producto.categoria,
    };

    if (file instanceof File) {
      const formData = new FormData();
      formData.append("titulo", producto.titulo);
      formData.append("stock", producto.stock);
      formData.append("precio", producto.precio);
      formData.append("descripcion", producto.descripcion);
      formData.append("contenido", producto.contenido);
      formData.append("categoria", producto.categoria);
      formData.append("portada", file);

      axios
        .put(`${url}/actualizar_producto_admin/${id}`, formData, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(
            "Producto actualizado con una nueva imagen",
            response.data
          );
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .put(`${url}/actualizar_producto_admin/${id}`, producto, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log("Producto actualizado sin nueva imagen", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content">
        <form onSubmit={handleSubmit}>
          <h1>Actualización de producto</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="titulo">Titulo de producto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titulo de producto"
                      name="titulo"
                      value={producto.titulo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Cantidad"
                      name="stock"
                      value={producto.stock}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label htmlFor="precio">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Precio"
                      name="precio"
                      value={producto.precio}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label htmlFor="categoria">Categoría</label>
                    <select
                      className="form-control custom-select"
                      id="categoria"
                      name="categoria"
                      value={producto.categoria}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Seleccionar
                      </option>
                      <option value="SAMSUNG">SAMSUNG</option>
                      <option value="MOTOROLA">MOTOROLA</option>
                      <option value="LG">LG</option>
                      <option value="HUAWEI">HUAWEI</option>
                      <option value="NOKIA">NOKIA</option>
                      <option value="SONY">SONY</option>
                      <option value="XIAOMI">XIAOMI</option>
                      <option value="ALCATEL">ALCATEL</option>
                      <option value="APPLE">APPLE</option>
                      <option value="BLACKBERRY">BLACKBERRY</option>
                    </select>
                  </div>
                  <div className="col-lg-12 form-group">
                    <label htmlFor="descripcion">Descripción corta</label>
                    <textarea
                      className="form-control"
                      placeholder="Descripcion corta del producto"
                      name="descripcion"
                      value={producto.descripcion}
                      onChange={handleInputChange}
                      required
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <textarea
                      className="form-control"
                      placeholder="Descripcion larga del producto"
                      name="contenido"
                      value={producto.contenido}
                      onChange={handleInputChange}
                      required
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <label htmlFor="portada">Portada</label>
                    <div className="custom-file">
                      <input
                        className="custom-file-input"
                        type="file"
                        id="portada"
                        onChange={handleFileChange}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="portada"
                        id="input-portada"
                      >
                        Seleccionar imagen
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <img
                      src={imgSelect}
                      className="img-thumbnail"
                      alt="Rounded image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary mr-4" type="submit">
              Actualizar producto
            </button>
            <a className="btn btn-warning" href="/panel/productos">
              Regresar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProducto;
