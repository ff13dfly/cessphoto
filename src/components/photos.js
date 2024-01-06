import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FileIcon } from 'react-file-icon';

import CESS from "../lib/CESS";
import Loading from "./loading";

function Photos({ bucketName }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await CESS.list(bucketName);
      console.log(result);
      setPhotos(result);
    };
    fetchPhotos();
  }, [bucketName]);

  return (
    <Container>
      <h1 className="text-center">Bucket: {bucketName}</h1>
      <Row>
        {photos.length > 0 ? photos.map((item, idx) => (
          <Col key={idx} className="text-center" onClick={async () => {
            alert("Downloading started...");
            await CESS.download(item.fileHash, item.fileName);
            alert("Download completed.");
          }}>
            <FileIcon extension={item.fileName.split('.').pop()} />
            <h6>{item.fileName}</h6>
          </Col>
        )) : <Loading />}
      </Row>
    </Container>
  )
}

export default Photos;