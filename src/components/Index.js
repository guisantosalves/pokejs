import {Container, Row} from "react-bootstrap"
import Aside from "./Aside"
import RightSide from "./RightSide";

const Index = () =>{

  return (
    <Container fluid>
      <Row>
        <Aside/>
        <RightSide/>
      </Row>
    </Container>
  );
}

export default Index;
