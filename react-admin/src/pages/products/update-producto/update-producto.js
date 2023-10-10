import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import "./update-producto.css";

function UpdateProducto() {
  return (
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content">
        <form>
          <h1>Actualización de producto</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8">
                <div class="row">
                  <div class="col-lg-12 form-group">
                    <label for="">Titulo de producto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titulo de producto"
                      name="titulo"
                      // [(ngModel)]="producto.titulo"
                      required
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label for="">Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Cantidad"
                      name="stock"
                      // [(ngModel)]="producto.stock"
                      required
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label for="">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Precio"
                      name="precio"
                      // [(ngModel)]="producto.precio"
                      required
                    />
                  </div>
                  <div className="col-lg-4 form-group">
                    <label for="">Categoría</label>
                    <select
                      className="form-control custom-select"
                      id="select-input"
                      name="categoria"
                      // [(ngModel)]="producto.categoria"
                      required
                    >
                      <option value="" selected disabled>
                        Seleccionar
                      </option>
                      <option>opcion 1</option>
                      <option>opcion 2</option>
                      <option>opcion 3</option>
                    </select>
                  </div>
                  <div className="col-lg-12 form-group">
                    <label for="">Descripción corta</label>
                    <textarea
                      className="form-control"
                      placeholder="Descripcion corta del producto"
                      name="descripcion"
                      // [(ngModel)]="producto.descripcion"
                      required
                      rows="5"
                    ></textarea>
                    <div className="col-lg-12 form-group">
                      <label for="">Contenido</label>
                      <textarea
                        className="form-control"
                        placeholder="Descripcion larga del producto"
                        name="contenido"
                        // [(ngModel)]="producto.descripcion"
                        required
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-12 form-group">
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            type="file"
                            id="file-input"
                          />
                          <label
                            className="custom-file-label"
                            for="file-input"
                            id="input-portada"
                          >
                            Seleccionar imagen
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <img
                          // [src]="imgSelect"
                          className="img-thumbnail"
                          alt="Rounded image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button class="btn btn-primary mr-4" type="submit">
              Actualizar producto
            </button>
            <a class="btn btn-warning" href="/panel/productos">
              Regresar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProducto;
