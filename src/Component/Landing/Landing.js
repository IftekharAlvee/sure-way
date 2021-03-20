import React, { useEffect, useState } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import fakeData from '../../fakedata/fakedata.json';
import VehicleCard from '../vehicleCard/VehicleCard';
import './Landing.css';

const Landing = () => {

    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        setVehicle(fakeData);
    },[]);

    // console.log(vehicle);



    return (
        <div className="landing">
            <Container>
                <CardDeck>
                {
                    vehicle.map(vehicle => <VehicleCard vehicle={vehicle} key={vehicle.id}></VehicleCard>)
                }
                </CardDeck>
                
            </Container>
        </div>
    );
};

export default Landing;