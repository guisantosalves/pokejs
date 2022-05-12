import React from "react";
import Aside from "./Aside";
import RightSide from "./RightSide";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const Search = (props) => {
  const verifica = true;
  return (
    <>
      <Aside />
      <Container style={{ backgroundColor: "#F0CEA0" }}>
        <Row>
          <RightSide verifica={verifica}/>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Search;
