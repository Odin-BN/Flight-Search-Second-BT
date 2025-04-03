import React, { useContext } from 'react';
import { FlightModel} from './FlightModel';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

//import { Card } from 'antd';
//Detalles de los vuelos, este componente para ha estar dentor de la pagina de detalles

interface Props {
    flight: FlightModel | null;
}

const PricesForDetailPage: React.FC<Props> = ({flight}) => {
    const {currencyCode} = useContext(FlightSearchAmadeus);

    return (
        
    <div className='flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 shadow-md transition bg-white card text-black'>
        
    
      <div className='flex flex-col items-start w-3/8'>

        <p className='font-bold text-xl'>Price Breakdown</p>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>Base:</p>
            <p>{flight?.basePrice}</p>
            <p>{currencyCode}</p>
        
        </div>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>Total Price:</p>
            <p>{flight?.totalPrice}</p>
            <p>{currencyCode}</p>
        </div>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>Fees:</p>
            <p>{flight?.feesPrice}</p>
            <p>{currencyCode}</p>
        </div>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>Price per traveler:</p>
            <p>{flight?.pricePerTraveler}</p>
            <p>{currencyCode}</p>
        </div>

      </div>
        
    </div>
  
    );
};

export default PricesForDetailPage;
