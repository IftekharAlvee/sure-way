import React from 'react';
import { Card } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';

const VehicleCard = (props) => {

    const {id,name,image} = props.vehicle;

    const history = useHistory();

    const getId = (id) => {
        const url = `/destination/${id}`;
        history.push(url);
    }
    return (
        <div onClick={() => getId(id)}>
            
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                </Card>
            
        </div>
    );
};

export default VehicleCard;