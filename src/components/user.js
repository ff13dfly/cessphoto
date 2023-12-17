import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function User(props) {
  const data=props.data;

  const self={
    click:(hash)=>{
      console.log(`Ready to get file by hash ( ${hash} ) .`);
    },
  }

  //let [list, setList] = useState([]);


  useEffect(() => {
  }, []);

  return (
    <Container>
      <Row>
        <Col>Account Management</Col>
      </Row>
    </Container>
  );
}

export default User;