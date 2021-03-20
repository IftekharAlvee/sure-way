import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ChooseVehicle from './ChooseVehicle';
import PlaceForm from './PlaceForm';

const Place = (props) => {
    const [situation, setSituation] = useState(true);
    const handleClick = () => {
        setSituation(!situation);
    }
    return (
        <div>
            {
                situation ? <PlaceForm></PlaceForm> : <ChooseVehicle check={props.check}></ChooseVehicle>
            }
            <button onClick={handleClick} >Confirm</button>
        </div>
    );
};

export default Place;