import { useState, useEffect } from "react";
import Helmet from "./../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;

      toast.success("Accesso Exitóso, Bienvenido!");
      navigate("/inicio");
      setLoading(false);
    } catch (error) {
      toast.error("Algo Salio Mal!");
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Helmet title={"Login"}>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col className="text-center w-full h-full m-auto text-white ">
                <h5 className="fw-bold">Cargando...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center h-full">

      

                <h3 className="fw-bold fs-4 mb-1 text-uppercase text-white">
                  Iniciar Sesión
                </h3>
                <Form onSubmit={loginAuth} className="auth__form">
                  <FormGroup className="form__group">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className=" w-75 p-1"
                      placeholder="Email..."
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      className=" w-75 p-1"
                      placeholder="Contraseña..."
                    />
                  </FormGroup>
                  <button className="login__btn">Iniciar Sesión</button>
                  <p className="p__text ">
                    No tienes cuenta? <Link to="/registrate">Registrate!</Link>{" "}
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
