import {Container, Row} from "react-bootstrap"
import Aside from "./Aside"
import RightSide from "./RightSide";
import Footer from "./Footer";
const Index = () =>{

  return (
    <Container style={{backgroundColor: "#F0CEA0"}}>
      <Row>
        <Aside/>
        <RightSide/> 
      </Row>
      <Row>
        <Footer/>
      </Row>
    </Container>
  );
}

export default Index;
