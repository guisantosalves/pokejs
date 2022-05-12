import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aside from "./Aside";
import RightSide from "./RightSide";
import Footer from "./Footer";

const Details = (props) => {
    return(
        <>
        <Aside />
          <Container style={{ backgroundColor: "#F0CEA0" }}>
            <Row>
              <Col>
                <h1>Aqui são so detalhes</h1>
              </Col>
            </Row>
            <Row>
              <Footer />
            </Row>
          </Container>
      </>
    )
}

export default Details;