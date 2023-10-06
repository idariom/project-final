import React, { useState, useEffect } from "react"; // Importa useEffect
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3300/api/login_admin",
        {
          email: email,
          password: password,
        }
      );

      const { data } = response.data;
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/home");
      } else {
        setError("Inicio de sesión fallido");
      }
    } catch (err) {
      setError("Error al iniciar sesión");
    }
  };

  const handleLogout = () => {
    setToken("");
  };

  return (
    // <Container
    //   className="d-flex justify-content-center align-items-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <Row>
    //     <Col md={0} className="mx-auto">
    //       <Form className="p-4 border rounded" onSubmit={handleLogin}>
    //         <div className="text-center mb-4">
    //           <img
    //             src="https://i.pinimg.com/736x/c3/c9/15/c3c915654d62e2764fc52df7da77fff9.jpg"
    //             alt=""
    //             width="100"
    //             height="100"
    //             style={{ border: "20px" }}
    //           />
    //           <h1 className="h3 mt-3">Please sign in</h1>
    //         </div>

    //         <Form.Group className="mb-3">
    //           <Form.Control
    //             type="email"
    //             placeholder="Email address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </Form.Group>

    //         <Form.Group className="mb-3">
    //           <Form.Control
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </Form.Group>

    //         {errorMessage && <p className="text-danger">{errorMessage}</p>}

    //         {token ? (
    //           <div>
    //             <p>Bienvenido, has iniciado sesión.</p>
    //             <Button
    //               variant="primary"
    //               onClick={handleLogout}
    //               className="w-100"
    //             >
    //               Sign out
    //             </Button>
    //           </div>
    //         ) : (
    //           <Button variant="primary" type="submit" className="w-100">
    //             Sign in
    //           </Button>
    //         )}
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>

    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col md={0} className="mx-auto">
          {token ? (
            <div>
              <p>Bienvenido, has iniciado sesión.</p>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          ) : (
            <div>
              <img
                className="mx-auto mb-1"
                src="https://i.pinimg.com/736x/c3/c9/15/c3c915654d62e2764fc52df7da77fff9.jpg"
                alt=""
                width="150"
                height="150"
                style={{ border: "20px" }}
              />
              <h1 className="h3 mb-3 fw-normal text-center"> Iniciar sesión </h1>
              <input
                className="form-control"
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className="btn btn-primary w-100 py-2 mt-4"
              >
                Iniciar Sesión
              </button>
              {error && <p>{error}</p>}
            </div>
          )}
        </Col>
      </Row>
    </Container>

    // <div className="App">
    //   <h1>Inicio de Sesión</h1>
    //   {token ? (
    //     <div>
    //       <p>Bienvenido, has iniciado sesión.</p>
    //       <button onClick={handleLogout}>Cerrar Sesión</button>
    //     </div>
    //   ) : (
    //     <div>
    //       <input
    //         type="email"
    //         placeholder="Correo Electrónico"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         placeholder="Contraseña"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <button onClick={handleLogin}>Iniciar Sesión</button>
    //       {error && <p>{error}</p>}
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
