import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";

function Toolbar(props) {
  let [hidden, setHidden] = useState(true);
  let [hideFile, setHideFile] = useState(true);
  let [hideFolder, setHideFolder] = useState(true);
  let [hidePreview, setHidePreview] = useState(true);

  const self = {
    click: () => {
      switch (props.way) {
        case "file":
          setHideFile(!hideFile);
          break;
        case "folder":
          setHideFolder(!hideFolder);
          break;
        case "preview":
          setHidePreview(!hidePreview);
          break;
        default:
          break;
      }
    },
  }

  useEffect(() => {
    //reset the hidden status
    setHideFile(true);
    setHideFolder(true);
    setHidePreview(true);

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
        setHidden(false);
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
              <input type="text" className="form-control" placeholder="Folder name..."/>
            </Col>
            <Col className="text-end" xs={4} sm={4} md={4}>
              <button className="btn btn-md btn-primary">Create</button>
            </Col>
          </Row>
        </Col>

        <Col hidden={hidePreview} xs={10} sm={10} md={10}>
          <Row>
            <Col xs={8} sm={8} md={8} ></Col>
            <Col className="text-end" xs={4} sm={4} md={4}>
              <button className="btn btn-md btn-danger">Remove</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolbar;