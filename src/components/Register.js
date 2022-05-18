import React from "react";
import { Container, Form, Row, Col, Image } from "react-bootstrap";
import Aside from "./Aside";
import Footer from "./Footer";

const Register = (props) => {
  return (
    <>
      <Aside />
      <div style={style.Container}>
        <Container>
          <Row style={{border: "1px solid red", padding: "15px"}}>
            <Col style={{ height: "700px" }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPokemonName">
                  <Form.Label>Insira o nome do pokemon</Form.Label>
                  <Form.Control type="text" placeholder="Ex: Pikachu" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPokemonName">
                  <Form.Label>Insira sua descrição</Form.Label>
                  <Form.Control type="text" placeholder="Ex: É fofinho" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPokemonName">
                  <Form.Label>Insira sua força</Form.Label>
                  <Form.Control type="number" placeholder="Ex: 2300" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPokemonName">
                  <Form.Label>Insira sua defesa</Form.Label>
                  <Form.Control type="number" placeholder="Ex: 2500" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <div>
                <h1 style={style.Texts}>Seu card</h1>
              </div>
              <div>
                <p style={style.Texts}>
                  Seu Card será cadastrado e ficará amostra para todos usuários
                  que irão acessar o site, obrigado por sua contribuição :D
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

const style = {
  Texts: {
    textAlign: "center",
  },
  Container: {
    marginTop: "13px",
    backgroundImage: `url("https://wallpapercave.com/wp/WDmLU1K.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "center",
  },
};
export default Register;
