import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FileIcon } from 'react-file-icon';

import CESS from "../lib/CESS";
import Loading from "./loading";

function Photos({ bucketName }) {
  const [photos, setPhotos] = useState([]);
  const [filePath, setFilePath] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      const result = await CESS.getBucketItems(bucketName);
      setIsLoading(false);
      console.log(result);
      setPhotos(result);
    };
    fetchPhotos();
  }, [bucketName]);

  return (
    <Container>
      <h1 className="text-center">Bucket: {bucketName}</h1>
      <Row>
        <Col xs={8} sm={8} md={8} >
          <input type="file" className="form-control" onChange={(event) => {
            setFilePath(event.target.files[0].path);
          }} />
        </Col>
        <Col className="text-end" xs={4} sm={4} md={4}>
          <button className="btn btn-md btn-primary" onClick={async () => {
            await CESS.upload(bucketName, filePath)
          }}>
            Upload
          </button>
        </Col>
      </Row>
      <Row>
        {isLoading ? <Loading /> : photos.map((item, idx) => (
          <Col key={idx} className="text-center" onClick={async () => {
            alert("Downloading started...");
            await CESS.download(item.fileHash, item.fileName);
            alert("Download completed.");
          }}>
            <FileIcon extension={item.fileName.split('.').pop()} />
            <h6>{item.fileName}</h6>
          </Col>
        ))
        }
      </Row>
    </Container>
  )
}

export default Photos;