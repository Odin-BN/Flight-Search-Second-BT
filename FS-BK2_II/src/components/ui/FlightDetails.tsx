import React from 'react';
import { FlightSegments } from './FlightModel';
import AmenitiesPopOver from './AmenitiesPopOver';

//import { Card } from 'antd';
//Detalles de los vuelos, este componente para ha estar dentor de la pagina de detalles

interface Props {
    flight: FlightSegments | null;
}

const FlightDetails: React.FC<Props> = ({flight}) => {

    return (
        
    <div className='flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 shadow-md transition bg-white card text-black'>
        
    
      <div className='flex flex-col items-start w-3/8'>

        <p>Segment {flight?.id || "X"}</p>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>{flight?.departureDate}</p>
            <p>{flight?.departureTime}</p>
            <p>-</p>
            <p>{flight?.arrivalDate}</p>
            <p>{flight?.arrivalTime}</p>
        </div>

        <div className='flex gap-x-1 text-black w-full text-lg'>
            <p>{flight?.departureCity}</p>
            <p>-</p>
            <p>{flight?.arrivalCity}</p>
        </div>


        <h3 className='flex gap-x-1 text-lg font-bold'>
            <p>{flight?.departureAirportName}</p>
            <p>({flight?.departureAirport})</p> 
            <p>-</p>
            <p>{flight?.arrivalAirportName}</p>
            <p>({flight?.arrivalAirport})</p>
        </h3>

        <div className='flex gap-x-1 w-full text-sm text-black'>
           <p>{flight?.airlineName}</p>
           <p>({flight?.airlineCode})</p>
        </div>

        <div className='flex gap-x-1 w-full text-sm text-black'>
            <p>{flight?.operatingAirlineName === flight?.airlineName ? null : "Operating Airline:"}</p>
            <p>{flight?.operatingAirlineName === flight?.airlineName ? null : flight?.operatingAirlineName}</p>
            <p>{flight?.operatingAirlineCode === flight?.airlineCode ? null : flight?.operatingAirlineCode}</p>
        </div>

        <div className='flex gap-x-1 w-full text-sm text-black'>
            <p>{flight?.flightNumber === null ? null : "Flight Number:"}</p>
            <p>{flight?.flightNumber}</p>
        </div>
       
      </div>

      <div className='flex flex-col items-center w-1/3 text-center text-base text-black'>

        <div className='flex gap-x-1'>
            <p>Duration:</p>
            <p>{flight?.duration}</p>
            
        </div>

        <div className='flex gap-x-1'>
            <p>{flight?.aircraftName === null ? null : "Aircraft:"}</p>
            <p>{flight?.aircraftName}</p>
        </div>

        
      </div>


        <div className='w-1/4 text-right'>
            <p className='font-bold'>Travelers fare details</p>

            <div className='flex gap-x-1 text-lg '>
                <p>Cabin:</p>
                <p>{flight?.flightPrices?.[0]?.cabinType}</p>
            </div>

            <div className='flex gap-x-1 text-lg'>
                <p>Class:</p>
                <p>{flight?.flightPrices?.[0]?.classType}</p>
            </div>

            <AmenitiesPopOver flight={flight?.flightAmenities || null} />
          
        </div>
        
    </div>
  
    );
};

export default FlightDetails;