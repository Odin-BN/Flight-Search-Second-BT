import React, {createContext, useState, ReactNode} from 'react';
import { FlightModel } from '@/components/ui/FlightModel';

type FlightListType = {
    flights: FlightModel[];
    setFlights: React.Dispatch<React.SetStateAction<FlightModel[]>>;
    page_Sel: string;
    setPage_Sel: (text: string) => void;
    fetchFlights: () => void;
    flightDetails: FlightModel | null; //vuelo del que se van a mostrar los detalles
    setFlightDetails: (fligthDetails: FlightModel | null) => void;
    //agregar la pagina actual
};

/*const FlightList = createContext<FlightListType | undefined>(undefined);*/

const FlightList = createContext<FlightListType>({
    flights: [],
    setFlights: () => {},
    page_Sel: "1",
    setPage_Sel: () => {},
    fetchFlights: () => {},
    flightDetails: null,
    setFlightDetails: () => {},

});

type FlightProviderProps = {
    children: ReactNode;
};

export const FlightListProvider = ({children}:FlightProviderProps) => {
    const [flights, setFlights] = useState<FlightModel[]>([]);
    const [page_Sel, setPage_Sel] = useState<string>("1");
    const [flightDetails, setFlightDetails] = useState<FlightModel | null>(null);

    //agregar el usecontext para que se llame cada que el valor de la pagina cambie
    const fetchFlights = async () => {
        let searchUrl = `http://localhost:9090/amadeus/Flights?page=${page_Sel}`;

        try {
            const response = await fetch(searchUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error al obtener los vuelos")
            }

            const data: FlightModel[] = await response.json();
            console.log("Datos obtenidos: ", data);
            setFlights(data);
        }   catch (error) {
            console.error("Error obteniendo los vuelos con paginacion, error: ", error)
        }

        
    };

    return (
        <FlightList.Provider value= {{flights, setFlights, page_Sel, setPage_Sel, fetchFlights, flightDetails, setFlightDetails}}>
            {children}
        </FlightList.Provider>
    )
}

export default FlightList;