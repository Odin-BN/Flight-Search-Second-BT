import React from 'react';
import { Button, Popover } from 'antd';
import { FlightAmenities } from './FlightModel';

interface Props {
    flight: FlightAmenities[] | null;
}

const AmenitiesPopOver: React.FC<Props> = ({flight}) => {

    const content = (
        <div className='text-black'>
            {Array.isArray(flight) ? (
            flight.map((flightAm, index) => (
                <div key={index}>
                    <p>{flightAm.description}</p>
                    <p>{flightAm?.chargeable ? "Is chargeable" : "Is not chargeable"}</p>
                    <p>-------------------------------------------------</p>
                </div>
            ))
            ) : (
                <p>No available</p>
            )}
        </div>
    );


    return (
            <Popover content={content} title="Amenities">
                <Button type="primary">Amenities</Button>
            </Popover>
    );
};

export default AmenitiesPopOver;
