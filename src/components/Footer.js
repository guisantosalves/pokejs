import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div style={style.container}>
      <div style={style.content}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <p>Desenvolvedor: Guilherme Santos</p>
          </li>
          <li>
            <p>
              API usada:{" "}
              <a
                href="https://pokeapi.co/"
                style={{ textDecorationColor: "black", color: "white" }}
              >
                PokéApi
              </a>
            </p>
          </li>
        </ul>
      </div>

      <div style={style.icon}>
        <Button href="https://github.com/guisantosalves">
          <BsGithub size="2em" />
        </Button>
      </div>
      <div style={style.icon}>
        <Button href="#">
          <BsLinkedin size="2em" />
        </Button>
      </div>
    </div>
  );
};

const style = {
  container: {
    backgroundColor: "#534D41",
    marginTop: "15px",
  },
  content: {
    display: "inline-block",
    padding: "30px",
    fontSize: "20px",
    color: "#F3A712",
  },
  icon: {
    display: "inline-block",
    float: "right",
    marginRight: "50px",
    marginTop: "50px",
  },
};

export default Footer;
