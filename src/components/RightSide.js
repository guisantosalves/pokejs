import * as React from "react";
import {Col} from "react-bootstrap";
import AdBar from "./subcomponents/Adbar";
import CardsContent from "./subcomponents/CardsContent";
import CarouselPoke from "./subcomponents/CarouselPoke";
import SearchBar from "./subcomponents/SeachBar";

const RightSide = (props) => {
  
  const VerifyFromSearch = props.verifica;
  return (
    <Col>
      <div style={style.carrosel}>

          {/* search bar for search page*/}
          {VerifyFromSearch ? <SearchBar/>:<></>}

          {/* carousel poke*/}
          {VerifyFromSearch ? <></>:<CarouselPoke/>}

          {/* lugar do AD */}
          {VerifyFromSearch ? <></>:<AdBar/>}

          {/* conteúdo dos cards que vou pegar da api */}
          <CardsContent/>
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
