import React, {useContext} from 'react';
import SortingButtons from './ui/SortingButtons';
import DirectFlightCard from './ui/DirectFlightCard';
import FlightList from '@/context/FlightList';
import DividerForPage from './ui/DividerForPage';
import Pagination_List from './ui/PaginationList';


const FlightsListPage: React.FC = () => {
    const {flights} = useContext(FlightList);

    return (
    <>
        <SortingButtons />

        <DirectFlightCard flight={flights[0] || null}/>
        {flights[1] && <DividerForPage/>}
        {flights[1] && <DirectFlightCard flight={flights[1] || null}/>}
        <DividerForPage/>
        <DirectFlightCard flight={flights[2] || null}/>
        <DividerForPage/>
        <DirectFlightCard flight={flights[3] || null}/>
        <Pagination_List />
    </>
    );

};

export default FlightsListPage;