import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";

function Toolbar(props) {
  const data = props.data;

  const self = {
    click: () => {
      switch (props.way) {
        case "file":
          setHideFile(!hideFile);
          break;
        case "folder":
          setHideFolder(!hideFolder);
          break;
        default:
          break;
      }
    },
  }

  let [hidden, setHidden] = useState(true);
  let [hideFile, setHideFile] = useState(true);
  let [hideFolder, setHideFolder] = useState(true);

  useEffect(() => {
    //reset the hidden status
    setHideFile(true);
    setHideFolder(true);

    //check main button
    switch (props.way) {
      case "file":
        setHidden(false);
        break;
      case "folder":
        setHidden(false);
        break;
      case "user":
        setHidden(true);
        break;
      case "preview":
        setHidden(true);
        break;
      default:
        break;
    }
  }, [props.way]);

  return (
    <Container className="fixedToolbar" hidden={hidden}>
      <Row className="pt-2 pb-4">
        <Col xs={2} sm={2} md={2}>
          <button className="btn btn-md btn-warning" onClick={(ev) => {
            self.click(ev)
          }}><IoIosMore /></button>
        </Col>
        <Col hidden={hideFile} xs={10} sm={10} md={10}>
          <Row>
            <Col xs={8} sm={8} md={8} >
              <input type="file" className="form-control" />
            </Col>
            <Col className="text-end" xs={4} sm={4} md={4}>
              <button className="btn btn-md btn-primary">Upload</button>
            </Col>
          </Row>
        </Col>

        <Col hidden={hideFolder} xs={10} sm={10} md={10}>
          <Row>
            <Col xs={8} sm={8} md={8} >
              <input type="text" className="form-control" />
            </Col>
            <Col className="text-end" xs={4} sm={4} md={4}>
              <button className="btn btn-md btn-primary">Add</button>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}

export default Toolbar;