import React from 'react';
import DepartureDate_Cal from "./ui/DepartureDate_Cal"
import ReturnDate_Cal from "./ui/ReturnDate_Cal"
import DepartureAirport_Sel from "./ui/DepartureAirport_Sel"
import ArrivalAirport_Sel from "./ui/ArrivalAirport_Sel"
import Currency_Sel from "./ui/Currency_Sel"
import NonStop_Slider from "./ui/NonStop_Slider"
import Adults_Inp from './ui/Adults_Inp';
import Search_Button from './ui/Search_Button';

const SearchModal: React.FC = () => {

    return (
    <>
        <DepartureDate_Cal/>
        <ReturnDate_Cal />
        <DepartureAirport_Sel />
        <ArrivalAirport_Sel />
        <Currency_Sel />
        <NonStop_Slider />
        <Adults_Inp />
        <Search_Button />
    </>
    );

};

export default SearchModal;