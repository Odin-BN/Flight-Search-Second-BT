import React, {useContext} from 'react';
import FlightList from '@/context/FlightList';
import FlightDetails from './ui/FlightDetails';
import PricesForDetailPage from './ui/PricesForDetailPage';

//Aqui va un ciclo con el componente para mostrar los detalles de los vuelos

//se agarra el valor de flightdeatils y se venia al componente de los detalles de los vuelos


const FlightDetailsPage: React.FC = () => {
    const {flightDetails} = useContext(FlightList);

    //hacer un cliclo que envie el segmento del vuelo que se va analizar
    /**{flightDetails?.infoPerItinerary[1].flightSegments[0] && <FlightDetails flight={flightDetails.infoPerItinerary[1].flightSegments[0]}/>}
        {flightDetails?.infoPerItinerary[1].flightSegments[1] && <FlightDetails flight={flightDetails.infoPerItinerary[1].flightSegments[1]}/>} */

    return (
    <>
        {flightDetails?.infoPerItinerary?.[0]?.flightSegments?.[0] && <PricesForDetailPage flight={flightDetails || null}/>}

        {flightDetails?.infoPerItinerary?.[0]?.flightSegments?.[0] && <FlightDetails flight={flightDetails.infoPerItinerary[0].flightSegments[0] || null}/>}
        {flightDetails?.infoPerItinerary?.[0]?.flightSegments?.[1] && <FlightDetails flight={flightDetails.infoPerItinerary[0].flightSegments[1] || null}/>}
        {flightDetails?.infoPerItinerary?.[1]?.flightSegments?.[0] && <FlightDetails flight={flightDetails.infoPerItinerary[1].flightSegments[0] || null}/>}
        {flightDetails?.infoPerItinerary?.[1]?.flightSegments?.[1] && <FlightDetails flight={flightDetails.infoPerItinerary[1].flightSegments[1] || null}/>}
    </>
    );

};

export default FlightDetailsPage;