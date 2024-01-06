import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

import CESS from "../lib/CESS";
import Photos from "../components/photos";

function Folders(props) {
  let [info, setInfo] = useState("Loading");
  let [list, setList] = useState([]);
  let [hiddenList, setHiddenList] = useState(true);
  let [hiddenInfo, setHiddenInfo] = useState(false);

  useEffect(() => {
    const fetchBucketList = async () => {
      const bucketList = await CESS.overview();
      if (bucketList === null) {
        setInfo("No target folder selected");
      } else {
        setHiddenInfo(true);
        setHiddenList(false);
        setList(bucketList);
      }
    }
    fetchBucketList();
  }, []);

  return (
    <Container>
      <Row hidden={hiddenInfo}>
        <Col className="pt-4 text-center">
          <h4>{info}</h4>
        </Col>
      </Row>
      <Row hidden={hiddenList}>
        {list.map((item, idx) => (
          <Col key={idx} className="text-center" onClick={() => {
            props.page(<Photos bucketName={item.key} objectList={item.objectList} />, "preview");
          }}>
            <Image className="icon text-center"
              src="folder.png"
            />
            <h6>{item.key}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Folders;