import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import fakeData from '../../fakedata/fakedata.json';
import Place from "../Place/Place"
import MyComponent from "../GoogleMap/GoogleMap"

const Destination = () => {
    const {id} = useParams();

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
          <Col sm={8}><MyComponent></MyComponent></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
