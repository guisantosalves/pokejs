import * as React from "react";
import {Col, ListGroup } from "react-bootstrap";

const RightSide = (props) => {

  return (
    <Col sm={10} style={{border: "1px solid red"}}>
      <ListGroup>
        <ListGroup.Item>
          <div>
            <h2>Pokedex</h2>
          </div>
        </ListGroup.Item>

        <ListGroup.Item>
          <div>
            <h2>Home</h2>
          </div>
        </ListGroup.Item>

        <ListGroup.Item>
          <div>
            <h2>Habilidades</h2>
          </div>
        </ListGroup.Item>

        <ListGroup.Item >
          <div>
            <h2>Detalhes</h2>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

const style = {
  container: {
    display: "flex",
    border: "1px solid red",
    width: "10%",
    position: "fixed",
    height: "100%",
    backgroundColor: "#DB2B39",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  titleMenu: {
    marginTop: "40px",
    fontFamily: "Arial, Helvetica, sans-serif",
    border: "1px solid blue",
    borderRadius: "50px",
    padding: "5px",
    textAlign: "center",
    marginLeft: "-20px",
    backgroundColor: "#F3A712"
  },
  button: {
    justifyContent: "center"
  },
};

export default RightSide;
