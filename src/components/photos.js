import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import CESS from "../lib/CESS";

function Photos({ bucketName, objectList }) {
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
      {photos && photos.map((item, idx) => (
        <div key={idx} className="text-center">
          <h6>{item.fileName}</h6>
        </div>
      ))}
    </Container>
  )
}

export default Photos;