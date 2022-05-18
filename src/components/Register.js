import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Aside from "./Aside";
import Footer from "./Footer";

const Register = (props) => {
  return (
    <>
      <Aside />
      <Container>
        <Row>
          <Col style={{height: "900px"}}>
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
                <Form.Control type="number" placeholder="Ex: É fofinho" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPokemonName">
                <Form.Label>Insira sua defesa</Form.Label>
                <Form.Control type="number" placeholder="Ex: É fofinho" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h1>eaeaea</h1>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Register;
