import { Navbar, Container, Row, Col } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import User from "./user";

function Nav(props) {
  const size = [3, 6, 3];

  const self={
    clickUser:(ev)=>{
      props.page(<User />,"user");
    },
    clickClose:(ev)=>{
      props.page("home");
    },
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <h5>CESS Album</h5>
        </Navbar.Brand>
        <Row>
          <Col className="text-end" hidden={!props.home}>
            <FaRegUser style={{marginLeft:"20px"}} size={27} onClick={(ev)=>{
              self.clickUser(ev);
            }}/>
          </Col>
          <Col className="text-end" hidden={props.home} onClick={(ev)=>{
            self.clickClose(ev);
          }}>
            <IoClose size={27}/>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Nav;