import { Container,Row,Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import tools from "../lib/tools";

function Folders(props) {

  let [info, setInfo] = useState("Loading");
  let [list, setList] = useState([]);
  let [hiddenList,setHiddenList]= useState(true);
  let [hiddenInfo,setHiddenInfo]= useState(false);

  
  const self={
    click:(hash)=>{
      console.log(`Ready to get file by hash ( ${hash} ) .`);
    },
    update:()=>{

    },
    getList:()=>{
      const key="cess_folders";
      const list=localStorage.getItem(key);
      if(list===null){
        localStorage.setItem(key,JSON.stringify([]));
        return [];
      }else{
        return list;
      }
    },
  }

  useEffect(() => {
    const nlist=self.getList();

    // const nlist=[
    //   {hash:tools.char(32),icon:"logo512.png",update:tools.stamp()},
    //   {hash:tools.char(32),icon:"logo512.png",update:tools.stamp()},
    //   {hash:tools.char(32),icon:"logo512.png",update:tools.stamp()},
    //   {hash:tools.char(32),icon:"logo512.png",update:tools.stamp()},
    //   //{hash:tools.char(10),icon:"logo512.png",update:tools.stamp()},
    //   //{hash:tools.char(10),icon:"logo512.png",update:tools.stamp()},
    //   //{hash:tools.char(10),icon:"logo512.png",update:tools.stamp()},
    // ]
    // setList(nlist);
  }, []);

  return (
    <Container>
      <Row hidden={hiddenInfo}>
        <Col  className="pt-4 text-center">
          <h4>{info}</h4>
        </Col>
      </Row>
      <Row hidden={hiddenList}>
        {list.map((row, index) => (
          <Col key={index}>{row.hash}</Col>
        ))}
      </Row>
    </Container>
  );
}

export default Folders;