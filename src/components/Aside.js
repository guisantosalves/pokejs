import * as React from "react";
import { Col, ListGroup, Button } from "react-bootstrap";

const Aside = (props) => {
  return (
    <Col sm={2} style={{ backgroundColor: "#DB2B39"  }}>
      <div>
        <ListGroup>
          <ListGroup.Item style={style.titleMenu}>
            <h2>Pokedex</h2>
          </ListGroup.Item>

          <ListGroup.Item style={style.titleMenu}>
            <Button style={style.button}>
              <h2>Home</h2>
            </Button>
          </ListGroup.Item>

          <ListGroup.Item style={style.titleMenu}>
            <Button style={style.button}>
              <h2>Search</h2>
            </Button>
          </ListGroup.Item>

          <ListGroup.Item style={style.titleMenu}>
            <Button style={style.button}>
              <h2>Detalhes</h2>
            </Button>
          </ListGroup.Item>
          
        </ListGroup>
      </div>
    </Col>
  );
};

const style = {
  container: {
    display: "flex",
    border: "1px solid red",

    position: "fixed",
    height: "100%",
    backgroundColor: "#DB2B39",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  titleMenu: {
    textAlign: "center",
    backgroundColor: "#DB2B39",
  },
  button: {
    
    
    backgroundColor: "#F3A712",
    color: "black",
  },
};

export default Aside;
