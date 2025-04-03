export interface FlightAmenities{
    description: string;
    chargeable: boolean;
}

export interface FlightPrices{
    cabinType: string;
    classType: string;
    checkedBagsWeight: string;
    checkedBagsUnit: string;
}

export interface FlightSegments{
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    departureAirport: string;
    departureAirportName: String;
    departureCity: string;
    arrivalAirport: string;
    arrivalAirportName: String;
    arrivalCity: string;
    airlineCode: string;
    airlineName: string,
    operatingAirlineCode: string;
    operatingAirlineName: string;
    duration: string;
    flightNumber: string;
    aircraftCode: string;
    aircraftName: string;
    flightAmenities: FlightAmenities[];
    id: number;
    flightPrices: FlightPrices[];
}

export interface FlightItineraries{
    itinerate_id: string;
    totalDuration: string;
    waitTime: string;
    flightSegments: FlightSegments[];
}

export interface FlightModel{
    flight_id: string,
    infoPerItinerary: FlightItineraries[];
    totalPrice: number;
    pricePerTraveler: number;
    basePrice: number;
    feesPrice: number;
}
