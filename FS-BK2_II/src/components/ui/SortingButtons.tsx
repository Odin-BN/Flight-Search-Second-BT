import React, { useContext, useEffect } from 'react';
import { Button, Flex } from 'antd';
import FlightsSort from '@/context/FlightsSort';
import FlightList from '@/context/FlightList';

const SortingButtons: React.FC = () => {
  const {flightsSort} = useContext(FlightsSort);
  const {fetchFlights} = useContext(FlightList);
  const {sortCalls} = useContext(FlightsSort);

  const sortPrice = () => {
    flightsSort("price");

    /*setTimeout(() => {
      fetchFlights();
      console.log("Termino el tiempo antes de solicitar la lista sorteada por precios");
    }, 5000);*/

  };

  const sortDuration = () => {
    flightsSort("duration");

    /*setTimeout(() => {
      fetchFlights();
      console.log("Termino el tiempo antes de solicitar la lista sorteada por duracion");
    }, 5000);*/
  }

  useEffect(() => {
    console.log("Se detecto cambio de orden por precio: " + sortCalls);
    fetchFlights();
  }, [sortCalls]);

  return (
  <Flex gap="small" wrap>
    <Button type="primary">Search</Button>
    <Button onClick={sortPrice}>Price</Button>
    <Button type="dashed" onClick={sortDuration}>Duration </Button>
  </Flex>
  );
};

export default React.memo(SortingButtons);