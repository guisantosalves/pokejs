import React, { useState } from "react";
import { Container, Form, Row, Col, Image } from "react-bootstrap";
import Aside from "./Aside";
import Footer from "./Footer";

const Register = (props) => {
  const [image, setimage] = useState(null);

  const onImageChange = (event) => {

    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      //about url.createObjectURL As opposed to a base64-encoded 
      //data URL, it doesn't contain the actual data of the object – 
      //instead it holds a reference.
      console.log(img)
      setimage(URL.createObjectURL(img));
    }

  };

  return (
    <>
      <Aside />
      <div style={style.Container}>
        <Container>
          <Row>
            <Col style={{ height: "700px" }}>
              <div style={style.ContainerFront}>
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

                  <Form.Group className="mb-3" controlId="formBasicPokemonName">
                    <Form.Label>insira seu pokemon</Form.Label>
                    <Form.Control type="file" name="yourPokemon" onChange={onImageChange}/>
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col>
              <div style={style.ContainerFront}>
                <div>
                  <h1 style={style.Texts}>Seu card</h1>
                </div>
                <div>
                  <p style={style.Texts}>
                    Seu Card será cadastrado e ficará amostra para todos
                    usuários que irão acessar o site, obrigado por sua
                    contribuição :D
                  </p>
                </div>
                {image === null ? <></> : <Image src={image} style={style.uploadedImage}/>}
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
  ContainerFront: {
    margin: "15px",
    backgroundColor: "rgba(99, 89, 92, 0.8)",
    padding: "15px",
    color: "#62BEC1",
    borderRadius: "10px",
  },
  uploadedImage: {
    width: "250px",
    height: "250px"
  }
};
export default Register;
