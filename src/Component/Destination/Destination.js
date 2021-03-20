import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import fakeData from '../../fakedata/fakedata.json';
import map from '../../Assets/img/Map.png'
import Place from "../Place/Place";

const Destination = () => {
    const {id} = useParams();
    // const code = Number(id);

    // console.log(code);
    const [vehicleInfo, setVehicleInfo] = useState([]);
    useEffect(() =>{
            setVehicleInfo(fakeData);
    },[]);
    // const vehicle = vehicleInfo[code-1];
    // // console.log({id});
    const check = vehicleInfo?.find(pd=> pd.id === id);
    // console.log(check);
    // console.log(vehicleInfo);
    // console.log(vehicle);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}><Place check={check} ></Place></Col>
          <Col sm={8}><Image fluid src={map}></Image></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
