import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./home.css";

function Home() {
  const [newProductos, setNewProductos] = useState([]);
  const url = "http://localhost:3300/api/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}listar_productos_nuevos_public`
        );
        setNewProductos(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Llama la función para obtener los datos cuando el componente se monta
  }, []);
  return (
    <div>
      <Header />
      <main>
        <section className="carousel">
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_607001-MLU71541490170_092023-O.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202304/gbom/6941487293490/800_800_0A72857BAC1FBEFDB6DCF257F66C1493mp.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.phonelectrics.com/cdn/shop/products/iPhone14ProMax-4_9dca631e-9f5d-4916-9e13-a92448e30a36_600x.jpg?v=1665773087"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className="container-fluid px-4 mt-5 mb-3 mb-sm-4 mt-md-0 mb-lg-5 py-5 py-lg-6">
          <div className="text-center mb-4 pb-2">
            <h2 className="h2">Nuevos productos</h2>
            <p className="font-size-lg text-muted mb-2">
              Echa un vistazo a nuestra última temporada
            </p>
            <a className="font-size-lg" href="/productos">
              Ver colección aquí
            </a>
          </div>
          <div className="row">
            {newProductos.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
              >
                <div className="card card-product">
                  <div className="card-product-img">
                    <a
                      href={`/productos/${item.slug}`}
                      className="card-img-top"
                    >
                      <img
                        src={`${url}obtener_portada/${item.portada}`}
                        alt="Product image"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </a>
                    <div className="card-product-widgets-top">
                      <div className="star-rating">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className="sr-star cxi-star-filled active"
                          ></i>
                        ))}
                      </div>
                    </div>
                    <div className="card-product-widgets-bottom">
                      <a
                        href={`/productos/${item.slug}`}
                        className="btn-wishlist ml-auto"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to wishlist"
                      ></a>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-product-title text-truncate mb-2">
                      <a href={`/productos/${item.slug}`} className="nav-link">
                        {item.titulo}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mt-1 mb-3 my-sm-4 py-5 py-lg-6">
          <h2 className="h1 mb-5 pb-3 text-center">Popular categories</h2>
          <div className="cs-carousel cs-nav-outside">
            <div
              className="cs-carousel-inner cs-carousel-inner-five"
              data-carousel-options="{}"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="dark"
                    class="bi bi-apple"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3">Apple</h3>
              </a>

              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0d47a1"
                      d="M47.97,19.826c0.654,3.747-9.547,8.655-22.788,10.96c-13.238,2.306-24.5,1.136-25.153-2.613 c-0.653-3.747,9.551-8.654,22.79-10.958C36.059,14.907,47.318,16.078,47.97,19.826z"
                    ></path>
                    <polygon
                      fill="#fafafa"
                      points="35.51,25.388 35.442,21.492 36.671,21.492 36.671,26.403 34.905,26.403 33.678,22.373 33.652,22.373 33.72,26.403 32.499,26.403 32.499,21.492 34.342,21.492 35.483,25.388"
                    ></polygon>
                    <polygon
                      fill="#fafafa"
                      points="13.177,21.952 12.497,26.455 11.157,26.455 12.076,21.492 14.284,21.492 15.201,26.455 13.865,26.455 13.204,21.952"
                    ></polygon>
                    <polygon
                      fill="#fafafa"
                      points="18.964,25.286 19.577,21.492 21.601,21.492 21.708,26.455 20.468,26.455 20.435,21.993 20.409,21.993 19.58,26.455 18.321,26.455 17.49,21.993 17.464,21.993 17.433,26.455 16.19,26.455 16.3,21.492 18.325,21.492 18.937,25.286"
                    ></polygon>
                    <path
                      fill="#fafafa"
                      d="M9.067,25.055c0.049,0.12,0.034,0.275,0.011,0.368c-0.042,0.165-0.154,0.333-0.483,0.333 c-0.312,0-0.5-0.179-0.5-0.45v-0.48H6.763L6.762,25.21c0,1.106,0.871,1.441,1.805,1.441c0.898,0,1.637-0.307,1.754-1.134 c0.061-0.429,0.015-0.709-0.005-0.816c-0.209-1.039-2.093-1.349-2.233-1.93c-0.024-0.099-0.017-0.205-0.005-0.262 c0.035-0.158,0.143-0.332,0.453-0.332c0.29,0,0.461,0.18,0.461,0.45c0,0.091,0,0.307,0,0.307h1.237v-0.348 c0-1.081-0.97-1.25-1.673-1.25c-0.883,0-1.604,0.292-1.736,1.099c-0.036,0.223-0.041,0.422,0.011,0.671 C7.049,24.118,8.811,24.412,9.067,25.055z"
                    ></path>
                    <path
                      fill="#fafafa"
                      d="M25.204,25.046c0.049,0.119,0.033,0.27,0.011,0.363c-0.041,0.165-0.152,0.33-0.479,0.33 c-0.307,0-0.494-0.179-0.494-0.444l-0.001-0.476h-1.318l-0.002,0.379c0,1.095,0.863,1.426,1.787,1.426 c0.888,0,1.62-0.303,1.736-1.122c0.061-0.426,0.018-0.702-0.004-0.807c-0.208-1.029-2.073-1.336-2.211-1.912 c-0.024-0.099-0.017-0.203-0.005-0.257c0.036-0.16,0.142-0.329,0.449-0.329c0.288,0,0.455,0.175,0.455,0.444 c0,0.09,0,0.304,0,0.304h1.228v-0.345c0-1.07-0.962-1.237-1.659-1.237c-0.873,0-1.588,0.288-1.717,1.09 c-0.036,0.22-0.04,0.415,0.012,0.663C23.206,24.118,24.951,24.41,25.204,25.046z"
                    ></path>
                    <path
                      fill="#fafafa"
                      d="M29.372,25.713c0.344,0,0.451-0.238,0.475-0.36c0.01-0.054,0.013-0.125,0.012-0.19V21.49h1.255 v3.56c0.003,0.091-0.006,0.279-0.011,0.325c-0.088,0.927-0.821,1.227-1.732,1.227c-0.913,0-1.646-0.301-1.733-1.227 c-0.004-0.047-0.013-0.235-0.011-0.325v-3.56h1.254v3.672c0,0.064,0.002,0.137,0.012,0.19 C28.921,25.473,29.025,25.713,29.372,25.713z"
                    ></path>
                    <path
                      fill="#fafafa"
                      d="M39.725,25.66c0.359,0,0.485-0.227,0.508-0.359c0.009-0.057,0.012-0.126,0.011-0.189v-0.72 h-0.509v-0.724h1.76V25c-0.001,0.093-0.003,0.162-0.018,0.327c-0.082,0.903-0.866,1.225-1.745,1.225 c-0.881,0-1.663-0.322-1.747-1.225c-0.014-0.166-0.016-0.234-0.018-0.327l0.001-2.089c0-0.088,0.011-0.244,0.021-0.327 c0.11-0.928,0.862-1.226,1.743-1.226c0.88,0,1.651,0.297,1.742,1.226c0.016,0.158,0.011,0.327,0.011,0.327v0.166h-1.251v-0.278 c0.001,0.001-0.002-0.118-0.016-0.189c-0.021-0.11-0.116-0.362-0.495-0.362c-0.362,0-0.467,0.238-0.494,0.362 c-0.015,0.065-0.021,0.154-0.021,0.234v2.27c-0.001,0.063,0.003,0.132,0.013,0.189C39.241,25.433,39.366,25.66,39.725,25.66z"
                    ></path>
                  </svg>
                </div>
                <h3 className="h5 mb-3">Samsung</h3>
              </a>

              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-balloon"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z"
                    />
                  </svg>
                </div>
                <h3 className="h5 mb-3">Motorola</h3>
              </a>

              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <img
                    style={{ maxWidth: "200%" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACWElEQVR4nK2VzUuUURTGfyhBUW3TtI8Zy4KS1rUtAk3HyE3WXqEcs+zfMMWdfSzDXGQImiFBs0wNpY/Jj639AzoFTai9cV6fVy7j+zGMHThw4Z77nHOfc+5zId5OAlngHbAM/JLbehroAU5QgdUDz4EtwAO+Ay+BQbmtl7S3CTwD6soFbwcKwG9gADgLpIG7wCPgshPbCDwBijqTSQLvBbaBj0AK6AAWVGngwyHnLHZWZ7NxlVvAa6BGHHvAN6APuAgcjinuIDAujEwY5wVVXiPQP8B9oIry7RAwB2wAx92NF+I8pcoN/GoIQBvQmpAkrZ48dUdxSw3tEC1W+Q3gh7xFsR/kSTao6TJm/KZ4mpZF0VMt4K/yNR3MyZPsnFOoT0leV/PUUPaZAL2TKVusAqPAHSW44G/v0LImb64gwSu9eH96jP/HSnA05lDOSZBWhe9LfAa4ogdY+N8JcsLodxNEUZSUIMwuCeO2S9G0xCylzYdUnqAP+AucErjf5B4BN0p38hrTqASrQDfQJaDAqnX2E3BemPeQnm+Ks1vaiBKssRLhGyip3pOmDbkPDel5UTRNSiquhSQ4ADQ4HujUdZ2ZAM5oPeIerFPHZyV2XxTUG0NXQMsDFfcZOAbMA+tAbWlwRlI7riSTunJeH00TcESS3SRKgl9tQuBvhBEpiFkFzImCm2qaF+Hz4rxB620NTay1Sc+LapYJ12m9E7uJeacmyKbFYoxOoyVJynfNPgvTc5sEq9Rm2h5j8OnbesX59K2hezgvx2zMbJbfiu+f8kApbW93FMPsHx22zn7dLzU/AAAAAElFTkSuQmCC"
                  />
                </div>
                <h3 className="h5 mb-3">LG</h3>
              </a>

              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                  >
                    <path d="M 13 4 C 10.97 4 9.4052969 5.7677656 9.4042969 9.0097656 C 9.4042969 11.126766 12.608219 16.5575 15.449219 21.3125 C 15.449219 9.0005 15.146 7.667 13 4 z M 19 4 C 16.812 7.604 16.550781 8.9995 16.550781 21.3125 C 19.391781 16.5575 22.595703 11.126766 22.595703 9.0097656 C 22.594703 5.7667656 21.03 4 19 4 z M 6 8 C 3.021 10.079 4.0009062 15.000422 5.5039062 16.607422 C 6.4969063 17.647422 10.35 19.52 14 22 L 6 8 z M 26 8 L 18 22 C 21.65 19.52 25.503094 17.647422 26.496094 16.607422 C 27.999094 15.000422 28.979 10.079 26 8 z M 2 16 C 2.048 21.542 5.4307969 23 7.7167969 23 L 13.431641 23 L 2 16 z M 30 16 L 18.568359 23 L 24.283203 23 C 26.569203 23 29.952 21.542 30 16 z M 5.1171875 24 C 5.4361875 25.654 6.1573281 27 8.2363281 27 C 10.315328 27 12.325641 25.8 13.431641 24 L 5.1171875 24 z M 18.568359 24 C 19.674359 25.8 21.684672 27 23.763672 27 C 25.842672 27 26.563813 25.654 26.882812 24 L 18.568359 24 z"></path>
                  </svg>
                </div>
                <h3 className="h5 mb-3">Huawei</h3>
              </a>

              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <img
                    style={{ maxWidth: "80%" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxklEQVR4nO2abWiWVRjHf9OpK4ucBb24fZiEQvgCA3OQ2cuHMFyGIMy3YojonJ8UM/piTQSlYtgLkQ7qSwshItNc6AeFiW8f/KKDQrdJVkZLnQkt19weueB/y+Fmz/Ocbfc5QviHAztn5/z/5+0651zX/cB93EUtsB+4BPwH5DzTAPALcBBYCpRwjzAZ+G4EHS+WDgGP3IuBJIP4E1gPVAKlI2g/HpgGrAF+F9fh2CtTK+FrQFUGfBXAH+JcTkQckOhbHnXPAKc86jWK8xgR0SNR2xrFkNhAMZh9WL2+WNurDBgC/vUUPA60e3Jf02CmEgFPS+xiAO7z4p5FBLwQcC//KO5XiICVEmt1yt5wtsVIkrVZ7fB8qfL6GAPZLLGPnLLrY7gIbTAJPlTZ2zEGskNi20ZxMqWRbveO8juJgE8ltrFAh3yRbrdO+c+IgK8ktqJAh3yRbrdM+a+JgB8k9mqBDvki3W6R8m1EwEmJLSzQIV+k2z2v/Aki4JzE5hXokC/S7aqVN43g+FlizxTokC/S7WYq/xMR0C2xqgADqVC+iwj4TWKPB7gQq1VmGtGe8DZ7CeyZcXUUg7A2q8TxgGN/phEcNyR2Fng0I84JCkLklEwjOPocwU5g9hj5HnbuppuOcxUct50VycnBsjfSxFFwmU10iOdv4Dn9bRrBMSQx8xQ/dvLdeiv5hHSeBD5x4mDdcqZKlDfO4BiQWBL6WezMarJC+4A6YDrwoNIM4E3gW6Df6fAXzuDHq3wwxkCSTrhbaZxOn+TUKZYG9Z56NsVdqv/bZEUzdjsuh4PN/FbgCPCrVsjSZUUTtxSIhU0Ut2254PhHYrZdskaZuG8R8R6ZEiienNNkBccViT3llJm3+Jdu5A0eHPnqP+bc+MHRKTGLbyXodQz5ukeH89WvVJnZVnAkJ9OcVNy2R5H5Bo8O56s/Q3UvRBgHpyVW41E3X4fzYW5Mx+qoxF4KwF0jbpusaJ8UXgtg7C+L2yYrOFolZqHTrI39dZV9H2EcfC4x+9yWtbGvVl2LnQXHBxKzp0bWxt4gbpus4HhXYk0BuLeK+30iYJPEmgMY+/ZhAuTBsFZiLQGMvVllNlnBUScxc56yNvYW1bXJCo4XJdYewNjbhrmjguEheYnmxS3IkNdiyf0KPGQVZiqKJscB+kb5Rl1oNQoRmb9eDkyS51cuz9CCDPOBJVql97RNE8/TjvdoMN96l3zvXEbJAhG7RxlWGjOe0Bddu1v26B12Wt/Lu1Ix4V6FfTr0sw6LLO7VitR7/oqC/z3uAMr85VxQ/3vpAAAAAElFTkSuQmCC"
                  />
                </div>
                <h3 className="h5 mb-3">Nokia</h3>
              </a>
              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 11 4 C 7.145 4 4 7.145 4 11 L 4 39 C 4 42.855 7.145 46 11 46 L 39 46 C 42.855 46 46 42.855 46 39 L 46 11 C 46 7.145 42.855 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773 6 44 8.227 44 11 L 44 39 C 44 41.773 41.773 44 39 44 L 11 44 C 8.227 44 6 41.773 6 39 L 6 11 C 6 8.227 8.227 6 11 6 z M 11 15 C 10.448 15 10 15.447 10 16 L 10 34 C 10 34.553 10.448 35 11 35 L 15 35 C 15.552 35 16 34.553 16 34 L 16 21 L 24 21 C 25.103 21 26 21.897 26 23 L 26 34 C 26 34.553 26.447 35 27 35 L 31 35 C 31.553 35 32 34.553 32 34 L 32 22 C 32 18.141 28.859 15 25 15 L 11 15 z M 35 15 C 34.447 15 34 15.447 34 16 L 34 34 C 34 34.553 34.447 35 35 35 L 39 35 C 39.553 35 40 34.553 40 34 L 40 16 C 40 15.447 39.553 15 39 15 L 35 15 z M 12 17 L 25 17 C 27.757 17 30 19.243 30 22 L 30 33 L 28 33 L 28 23 C 28 20.794 26.206 19 24 19 L 15 19 C 14.448 19 14 19.447 14 20 L 14 33 L 12 33 L 12 17 z M 36 17 L 38 17 L 38 33 L 36 33 L 36 17 z M 19 22 C 18.448 22 18 22.447 18 23 L 18 34 C 18 34.553 18.448 35 19 35 L 23 35 C 23.552 35 24 34.553 24 34 L 24 23 C 24 22.447 23.552 22 23 22 L 19 22 z M 20 24 L 22 24 L 22 33 L 20 33 L 20 24 z"></path>
                  </svg>
                </div>
                <h3 className="h5 mb-3">Xiami</h3>
              </a>
              <a
                href="shop-catalog.html"
                className="d-inline-block cs-image-scale cs-heading-highlight text-center"
                style={{ marginRight: "10px", paddingRight: "10px" }}
              >
                <div
                  className="cs-image-inner rounded-circle mx-auto mb-4"
                  style={{ maxWidth: "180px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 8.4375 2 C 6.539063 2.023438 4.992188 3.605469 5 5.5 C 5 5.511719 5 5.519531 5 5.53125 L 5 35.96875 C 4.972656 36.101563 4.972656 36.242188 5 36.375 L 5 44.5 C 4.996094 45.105469 5.140625 45.691406 5.4375 46.21875 C 6.378906 47.882813 8.523438 48.503906 10.1875 47.5625 L 12.40625 46.3125 C 12.496094 46.273438 12.582031 46.21875 12.65625 46.15625 L 40.03125 30.78125 C 40.050781 30.773438 40.074219 30.761719 40.09375 30.75 L 40.125 30.75 C 40.148438 30.730469 40.167969 30.710938 40.1875 30.6875 L 40.21875 30.6875 C 40.230469 30.675781 40.238281 30.667969 40.25 30.65625 L 40.28125 30.65625 C 40.3125 30.636719 40.34375 30.617188 40.375 30.59375 L 45.625 27.65625 C 46.101563 27.382813 46.507813 26.976563 46.78125 26.5 C 47.613281 25.042969 47.082031 23.175781 45.625 22.34375 L 39 18.625 C 38.90625 18.542969 38.800781 18.480469 38.6875 18.4375 L 10.1875 2.4375 C 9.652344 2.132813 9.050781 1.992188 8.4375 2 Z M 8.46875 4 C 8.730469 3.996094 8.992188 4.058594 9.21875 4.1875 L 36.28125 19.40625 L 34.1875 20.5625 L 27.71875 16.9375 C 27.4375 16.773438 27.109375 16.683594 26.78125 16.6875 C 25.789063 16.699219 24.988281 17.539063 25 18.53125 L 25 20.375 L 16.1875 15.4375 C 15.773438 15.203125 15.324219 15.082031 14.875 15.03125 C 13.527344 14.878906 12.140625 15.535156 11.4375 16.78125 C 11.140625 17.308594 10.996094 17.894531 11 18.5 L 11 33.5625 L 7.9375 35.28125 C 7.648438 35.445313 7.316406 35.484375 7 35.4375 L 7 5.5 C 6.988281 4.671875 7.640625 4.011719 8.46875 4 Z M 14.375 17 C 14.660156 16.976563 14.949219 17.035156 15.21875 17.1875 L 25 22.6875 L 25 25.71875 L 13 32.4375 L 13 18.5 C 13 18.242188 13.0625 17.972656 13.1875 17.75 C 13.441406 17.300781 13.898438 17.035156 14.375 17 Z M 27 18.8125 L 38 25 L 27 31.1875 Z M 38.3125 20.53125 L 44.625 24.09375 C 45.144531 24.390625 45.328125 25.011719 45.03125 25.53125 C 44.9375 25.695313 44.789063 25.8125 44.625 25.90625 L 39.71875 28.65625 L 37.65625 27.5 L 39.5 26.46875 C 39.761719 26.320313 39.976563 26.105469 40.125 25.84375 C 40.582031 25.050781 40.292969 23.988281 39.5 23.53125 L 36.21875 21.6875 Z M 25 28 L 25 31.46875 C 24.996094 31.796875 25.085938 32.09375 25.25 32.375 C 25.746094 33.238281 26.859375 33.558594 27.71875 33.0625 L 35.625 28.625 L 37.6875 29.8125 L 13 43.6875 L 13 34.75 Z M 11 35.875 L 11 44.8125 L 9.21875 45.8125 C 8.496094 46.21875 7.59375 45.972656 7.1875 45.25 C 7.058594 45.023438 7 44.757813 7 44.5 L 7 37.46875 C 7.652344 37.503906 8.324219 37.355469 8.90625 37.03125 L 8.9375 37.03125 Z"></path>
                  </svg>
                </div>
                <h3 className="h5 mb-3">Sony</h3>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <img
                  src="https://www.cloudi5.com/asset/images/mobile-app-development-services-cloudi5.png"
                  class="d-block mx-auto my-4 mb-lg-0 mt-lg-n4"
                  width="498"
                  alt="Illustartion"
                />
              </div>
              <div className="col-md-7 col-lg-6 pt-3 pb-5 pt-md-5 pb-md-4 ml-auto">
                <h2 className="text-light text-center text-md-left pb-3">
                  Envios nacionales e internacionales o visitanos en nuestros
                  puntos fisicos
                </h2>
                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-md-start">
                  {/* <a
                    href="#"
                    className="btn-market btn-apple mb-3 mx-2 ml-md-0 mr-md-3"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Descarga nuestro</span>
                    <span className="btn-market-title">Catalogos</span>
                  </a>
                  <a
                    href="#"
                    className="btn-market btn-google mb-3 mx-2 mx-md-0"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 pb-4 pt-lg-6 pb-lg-5 border-top border-bottom">
          <div className="container pt-md-4 pb-2 pt-lg-0 pb-lg-0">
            <div className="row">
              <div className="col-md-4 text-center text-md-left pb-2 pb-md-0 mb-4 mb-md-0">
                <p className="text-dark text-uppercase mb-2">
                  Siguenos en Instagram y en nustras redes sociales
                </p>
                <h2 className="h1 pb-2 pb-md-3">@Celulares_Store</h2>
                <a href="#" className="btn btn-outline-primary btn-lg">
                  <i className="cxi-instagram font-size-lg mr-1"></i>
                  Redes sociales
                </a>
              </div>
              <div className="col-md-8">
                <div className="cs-carousel cs-nav-outside">
                  <div
                    className="cs-carousel-inner cs-carousel-inner-six"
                    data-carousel-options="{
                  
                }"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </div>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                    </div>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-messenger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-tiktok"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-gitlab"
                        viewBox="0 0 16 16"
                      >
                        <path d="m15.734 6.1-.022-.058L13.534.358a.568.568 0 0 0-.563-.356.583.583 0 0 0-.328.122.582.582 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.673.673 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.046 4.046 0 0 0 1.34-4.668Z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-twitch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
                        <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
