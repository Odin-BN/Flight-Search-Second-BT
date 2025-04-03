import React, {useContext, useEffect, useState} from 'react';
import { FlightModel } from './FlightModel';
import { useNavigate } from 'react-router-dom';
import FlightList from '@/context/FlightList';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

//import { Card } from 'antd';
//Vuelo sencillo, osea sin fecha de vuelta, solo ida

interface Props {
    flight: FlightModel;
}

const DirectFlightCard: React.FC<Props> = ({flight}) => {
    const navigate = useNavigate();
    const {setFlightDetails} = useContext(FlightList);
    const {flights} = useContext(FlightList);
    const {currencyCode} = useContext(FlightSearchAmadeus);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (flight?.infoPerItinerary?.[1]) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

    }, flights);
    
    

    const handleClick = () => {
        setFlightDetails(flight);
        navigate(`/flightsDisp/details`);
    }

    return (
    <>
    <div className='flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 shadow-md transition cursor-pointer bg-white card' onClick={handleClick}>
    
      <div className='flex flex-col items-start w-1/4'>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureDate || "fecha de salida"}</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureTime || "hora de salida"}</p>
            <p>-</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[flight.infoPerItinerary[0].flightSegments.length-1]?.arrivalDate || "fecha de llegada"}</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[flight.infoPerItinerary[0].flightSegments.length-1]?.arrivalTime || "hora de llegada"}</p>
        </div>


        <h3 className='flex gap-x-1 text-2xl font-bold text-black'>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureCity || "aeropuerto de salida"}</p>
            <p>({flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureAirport || "aeropuerto de salida"})</p> 
            <p>-</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[flight.infoPerItinerary[0].flightSegments.length-1]?.arrivalCity ||"aeropuerto llegada"}</p>
            <p>({flight?.infoPerItinerary?.[0]?.flightSegments?.[flight.infoPerItinerary[0].flightSegments.length-1]?.arrivalAirport ||"aeropuerto llegada"})</p>
        </h3>

        <div className='flex gap-x-1 w-full text-sm text-black'>
           <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.airlineName || "Nombre de aerolinea"}</p>
           <p>({flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.airlineCode || "Codigo Aerolinea"})</p>
        </div>
       
        <div className='flex gap-x-1 w-full text-sm text-black'>
           <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.airlineName === flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.operatingAirlineName ? 
           null : (flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.operatingAirlineName)}</p>

           <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.operatingAirlineCode === flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.airlineCode ? 
           null : (flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.operatingAirlineCode)}</p>
        </div>

      </div>

      <div className='flex-col flex justify-between items-center w-full text-center text-black'>

        <p className='m-0'>{flight?.infoPerItinerary?.[0].totalDuration|| "Cambiar el formato"}</p>

        <div className='flex flex1 gap-x-1 justify-center w-full items-center text-center'>
          <p>{flight?.infoPerItinerary?.[0]?.waitTime === "0" ? null : flight?.infoPerItinerary?.[0]?.waitTime}</p>
          <p>{flight?.infoPerItinerary?.[0]?.waitTime === "0" ? null : "in"}</p>
          <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.departureCity}</p>
          <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.departureAirport}</p>
        </div> 
        
     </div>


        <div className='flex flex-col justify-between items-center w-full ml-auto'>
            <div className='flex gap-x-1 text-right font-bold text-lg ml-auto'>
                <p>{flight?.totalPrice || "Precio total"}</p>
                <p>{currencyCode}</p>
            </div>
            
            <p className='text-sm ml-auto'> Total </p>

            <div className='flex gap-x-1 text-right font-bold text-lg ml-auto'>
                <p> {flight?.pricePerTraveler || "Precio por viajero"}</p>
                <p>{currencyCode}</p>
            </div>
            
            <p className='text-sm ml-auto'> Price Per Traveler</p>
        </div>
        
    </div>


    {isVisible && (

        <div className='flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 shadow-md transition cursor-pointer bg-white card text-black'>
            <div className='flex flex-col items-start text-left w-1/4'>

                <div className='flex gap-x-1 text-sm text-black w-full'>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.departureDate }</p>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.departureTime }</p>
                    <p>-</p>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[flight.infoPerItinerary[1].flightSegments.length-1]?.arrivalDate }</p>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[flight.infoPerItinerary[1].flightSegments.length-1]?.arrivalTime}</p>
                </div>


                <h3 className='flex gap-x-1 text-2xl font-bold'>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.departureCity }</p>
                    <p>({flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.departureAirport })</p> 
                    <p>-</p>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[flight.infoPerItinerary[1].flightSegments.length-1]?.arrivalCity }</p>
                    <p>({flight?.infoPerItinerary?.[1]?.flightSegments?.[flight.infoPerItinerary[1].flightSegments.length-1]?.arrivalAirport})</p>
                </h3>

                <div className='flex gap-x-1 w-full text-sm text-black'>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[flight.infoPerItinerary.length-1]?.airlineName }</p>
                    <p>({flight?.infoPerItinerary?.[1]?.flightSegments?.[flight.infoPerItinerary.length-1]?.airlineCode })</p>
                </div>

        
                <div className='flex gap-x-1 w-full text-sm text-black'>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.airlineName === flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.operatingAirlineName ? 
                    null : flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.operatingAirlineName}</p>

                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.operatingAirlineCode === flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.airlineCode ? 
                    null : flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.operatingAirlineCode}</p>
                </div>

            </div>

            <div className='flex flex-col items-center w-1/3 text-center text-base text-black'>


                <p>{flight?.infoPerItinerary?.[1]?.totalDuration}</p>

                <div className='flex gap-x-1 justify-center w-full items-center text-center'>
                    <p>{flight?.infoPerItinerary?.[1]?.waitTime}</p>
                    <p>in</p>
                    <p>{flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.departureCity}</p>
                    <p>({flight?.infoPerItinerary?.[1]?.flightSegments?.[0]?.departureAirport})</p>
                </div> 
            
            </div>

        </div>
       )}
    </>
  
    );
};

export default DirectFlightCard;