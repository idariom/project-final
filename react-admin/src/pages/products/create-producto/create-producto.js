import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/sidebar/sidebar";
import "./create-producto.css";
import { useNavigate } from 'react-router-dom';

function CreateProducto() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    titulo: "",
    stock: 0,
    precio: 0,
    categoria: "",
    descripcion: "",
    contenido: "",
    portada: "",
  });
  const [file, setFile] = useState(null);
  const [imgSelect, setImgSelect] = useState("../../../assets/images/01.jpg");

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

      if (selectedFile.size <= 4000000) {
        if (
          selectedFile.type === "image/png" ||
          selectedFile.type === "image/webp" ||
          selectedFile.type === "image/jpg" ||
          selectedFile.type === "image/jpeg" ||
          selectedFile.type === "image/gif"
        ) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImgSelect(reader.result);
            // No es necesario setear producto.portada aquí
          };
          reader.readAsDataURL(selectedFile);
        } else {
          alert("El archivo debe ser una imagen");
          setImgSelect("../../../assets/images/01.jpg");
          setFile(null);
        }
      } else {
        alert("La imagen no puede superar los 4MB");
        setImgSelect("../../../assets/images/01.jpg");
        setFile(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Debe subir una imagen de portada para registrar el producto");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", producto.titulo);
    formData.append("stock", producto.stock);
    formData.append("precio", producto.precio);
    formData.append("descripcion", producto.descripcion);
    formData.append("contenido", producto.contenido);
    formData.append("categoria", producto.categoria);
    formData.append("portada", file); // Use 'file' instead of 'producto.portada'

    axios
      .post("http://localhost:3300/api/registro_producto_admin", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        alert("Se registró correctamente el nuevo producto");
        navigate('/panel/productos');
      })
      .catch((error) => {
        console.error(error);
      });
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
                      id="select-input"
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
            </div>
          </div>
          <div className="card-footer">
            <div className="col-lg-12 form-group">
              <label htmlFor="portada">Portada</label>
              <div className="custom-file">
                <input
                  className="custom-file-input"
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                />
                <label
                  className="custom-file-label"
                  htmlFor="file-input"
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
            <button className="btn btn-primary mr-4" type="submit">
              Crear producto
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

export default CreateProducto;
