import * as React from "react";
import {Col, Carousel } from "react-bootstrap";

const RightSide = (props) => {

  return (
    <Col sm={10} style={{border: "1px solid red"}}>
      <div style={style.carrosel}>
          <Carousel>
              <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="https://images5.alphacoders.com/613/613925.jpg"
                    style={{width: "200px", height: "600px"}}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                      <h2 style={{color: "orange"}}>Pokedex</h2>
                      <p style={{color: "orange"}}>Aqui você encontra os melhores pokemons e sua descrição</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="https://images4.alphacoders.com/111/111858.jpg"
                    style={{width: "200px", height: "600px"}}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                      <h2 style={{color: "orange"}}>Pokedex</h2>
                      <p style={{color: "orange"}}>Aqui você encontra os melhores pokemons e sua descrição</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="https://images.alphacoders.com/119/119081.jpg"
                    style={{width: "200px", height: "600px"}}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                      <h2 style={{color: "orange"}}>Pokedex</h2>
                      <p style={{color: "orange"}}>Aqui você encontra os melhores pokemons e sua descrição</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
    </Col>
  );
};

const style = {
  carrosel: {
    padding: "5px"
  },
};

export default RightSide;
