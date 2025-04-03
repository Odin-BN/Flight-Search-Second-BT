import { createContext, useState, ReactNode} from 'react';
//import { FlightSearch } from '@/components/ui/FlightSearch';

type FlightSearchAmadeusType = {
    originLocationCode: string;
    destinationLocationCode: string;
    departureDate: string;
    returnDate: string;
    adults: string;
    nonStop: boolean;
    currencyCode: string;
    setOriginLocationCode: (originLocationCode: string) => void;
    setDestinationLocationCode: (destinationLocationCode: string) => void;
    setDepartureDate: (departureDate: string) => void;
    setReturnDate: (returnDate: string) => void;
    setAdults: (adults: string) => void;
    setNonStop: (nonStop: boolean) => void;
    setCurrencyCode: (currencyCode: string) => void;
    handleSearch: () => void;
};

const FlightSearchAmadeus = createContext<FlightSearchAmadeusType>({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "Fecha actual",
    returnDate: "",
    adults: "1",
    nonStop: true,
    currencyCode: "",
    setOriginLocationCode: () => {},
    setDestinationLocationCode: () => {},
    setDepartureDate: () => {},
    setReturnDate: () => {},
    setAdults: () => {},
    setNonStop: () => {},
    setCurrencyCode: () => {},
    handleSearch: () => {},
});

type FlightProviderProps = {
    children: ReactNode;
};

export const FlightProvider = ({ children }: FlightProviderProps) => {
    const [originLocationCode, setOriginLocationCode] = useState<string>("");
    const [destinationLocationCode, setDestinationLocationCode] = useState<string>("");
    const [departureDate, setDepartureDate] = useState<string>("Fecha actual");
    const [returnDate, setReturnDate] = useState<string>("");
    const [adults, setAdults] = useState<string>("1");
    const [nonStop, setNonStop] = useState<boolean>(true);
    const [currencyCode, setCurrencyCode] = useState<string>("EUR");

    const handleSearch = async () => {
        let searchUrl = "http://localhost:9090/amadeus/FlightSearch";

        //creacion del body
        const newFlightParamSearch = {
            originLocationCode: originLocationCode,
            destinationLocationCode: destinationLocationCode,
            departureDate: departureDate,
            returnDate: returnDate,
            adults: adults,
            nonStop: nonStop,
            currencyCode: currencyCode,
        }

        //console.log(JSON.stringify(newFlightParamSearch));

        try {
            const response = await fetch(searchUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json", }, body: JSON.stringify(newFlightParamSearch),
            });
            
            if (!response.ok) {
                throw new Error("Error obtaining the available flights");
            }

        } catch (error) {
            console.error("Error searching flights:", error);
        }
    };

    return (
        <FlightSearchAmadeus.Provider value = {{originLocationCode, destinationLocationCode, departureDate, returnDate, 
            adults, nonStop, currencyCode, 
            setOriginLocationCode, setDestinationLocationCode, setDepartureDate, setReturnDate,
            setAdults, setNonStop, setCurrencyCode, handleSearch}}>

                {children}

        </FlightSearchAmadeus.Provider>
    );
};

export default FlightSearchAmadeus;