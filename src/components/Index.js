import {Container, Row} from "react-bootstrap"
import Aside from "./Aside"
import RightSide from "./RightSide";
import Footer from "./Footer";
const Index = () =>{

  return (
    <Container>
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
