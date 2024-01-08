import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

import CESS from "../lib/CESS";
import Photos from "../components/photos";
import Loading from "./loading";

function Folders(props) {
  let [list, setList] = useState([]);
  let [bucketName, setBucketName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBucketList = async () => {
      const bucketList = await CESS.listBuckets();
      setIsLoading(false);
      setList(bucketList);
    }
    if (isLoading) {
      fetchBucketList();
    }
  }, [isLoading]);

  return (
    <Container>
      <div style={{ marginTop: "24px", display: "flex", flexDirection: "row", gap: "12px"}}>
        <div style={{ width: "70%" }}>
          <input type="text" className="form-control" onChange={(event) => {
            setBucketName(event.target.value);
          }} />
        </div>
        <div className="text-end" style={{ minWidth: "150px" }}>
          <button className="btn btn-md btn-primary" onClick={async () => {
            await CESS.createBucket(bucketName);
            alert("Bucket created.");
            setIsLoading(true);
          }}>
            Create Bucket
          </button>
        </div>
      </div>
      {isLoading ?
        <Loading />
        :
        <Row>
          {list.map((item, idx) => (
            <Col key={idx} className="text-center" onClick={() => {
              props.page(<Photos bucketName={item.key} />, "preview");
            }}>
              <Image className="icon text-center"
                src="folder.png"
              />
              <h6>{item.key}</h6>
            </Col>
          ))}
        </Row>
      }
    </Container>
  );
}

export default Folders;