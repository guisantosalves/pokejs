import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Aside from "./Aside";
import Footer from "./Footer";

const Details = (props) => {
  return (
    <>
      <Aside />
      <Container style={{ backgroundColor: "#F0CEA0" }}>
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <h1>Projeto</h1>
              <div>
                <p>
                  O projeto pokedex foi desenvolvido por mim{" "}
                  <mark>guilherme santos</mark> para com a ajuda da comunidade
                  conseguir a maior informação possível sobre pokémon e seu
                  universo. Este Site não tem nenhuma relação com a nintendo e
                  não existe nenhum meio de ganho externo.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>
              <h1>Desenvolvimento</h1>
              <p>
                Foi dedicado tempo de estudos e de esforço para o
                desenvolvimento deste site para a comunidade de pokémon.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <div>
                <h3 style={{ textAlign: "center" }}>Tecnologias usada:</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    style={{ backgroundColor: "#534D41", color: "white" }}
                  >
                    ReactJS
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#534D41", color: "white" }}
                  >
                    React Bootstrap
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#534D41", color: "white" }}
                  >
                    React Router
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#534D41", color: "white" }}
                  >
                    Nodejs
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Obrigado por sua visita</h3>
            <Image
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="https://animeeverything.online/ezoimgfmt/i.chzbgr.com/full/8412058624/h7199E006/greetings?ezimgfmt=rs:500x281/rscb2"
              roundedCircle="true"
            />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Details;
