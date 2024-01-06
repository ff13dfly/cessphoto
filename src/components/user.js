import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Overview from "./overview";


function User(props) {
  return (
    <Container>
      <Row>
        <Col>Account Management</Col>
        <Overview />
      </Row>
    </Container>
  );
}

export default User;