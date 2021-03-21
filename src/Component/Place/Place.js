import React, { useState } from 'react';
import ChooseVehicle from './ChooseVehicle';
import PlaceForm from './PlaceForm';

const Place = (props) => {
    const [situation, setSituation] = useState(true);
    const handleClick = () => {
        setSituation(!situation);
    }
    const [confirm, setConfirm] = useState(true);
    const handleConfirm = () => {
        setConfirm(!confirm);
    }
    return (
        <div>
            {
                situation ? <PlaceForm></PlaceForm> :  <ChooseVehicle check={props.check} confirm={confirm} ></ChooseVehicle> 
            }
            {
                situation ? <button onClick={handleClick} >Place Order</button> : <button onClick={handleConfirm}>{confirm ? <span>Confirm</span> : <span>Thanks for order</span> }</button>
            }
        </div>
    );
};

export default Place;