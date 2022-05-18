import * as React from "react";
import {
  Col,
  ListGroup,
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const Aside = (props) => {
  return (
    <Navbar expand="lg" style={style.navbar}>
      <Container>
        <Navbar.Brand href="/" style={style.fontPokedex}>
          Pokedex
        </Navbar.Brand>
        {/* arrumar isso aq, nao esta pegando */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        {/* arrumar isso aq, nao esta pegando */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/details">Detalhes</Nav.Link>
            <NavDropdown title="Comunidade" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#vercadastros">Análise</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Excluir">Excluir cards</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const style = {
  navbar: {
    backgroundColor: "#DB2B39",
    height: "80px",
  },
  fontPokedex: {
    fontSize: "3em",
    fontFamily: "Times New Roman",
  },
};

export default Aside;
