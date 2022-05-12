import React from "react";
import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import RightSide from "./RightSide";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <Aside />
        <Container style={{ backgroundColor: "#F0CEA0" }}>
          <Row>
            <RightSide />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
    </>
  );
};

export default Index;
