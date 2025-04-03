import React, {useContext, useEffect, useState} from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';
import { Airport } from './Airport';

const DepartureAirport_Sel: React.FC = () => {
  const { originLocationCode, setOriginLocationCode } = useContext(FlightSearchAmadeus);

  const handleChange = (value: string) => {
    setOriginLocationCode(value);

  };

  useEffect(() => {
    console.log(originLocationCode);
  }, [originLocationCode]);

  //const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [options, setOptions] = React.useState<AutoCompleteProps['options']>([]);

  const fetchSuggestions = async (searchTerm: string) => {
    console.log(searchTerm);

    if (!searchTerm) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:9090/amadeus/search?query=${searchTerm}`);
      const data = await response.json();
      setSuggestions(data);

      setOptions(() => {
        return suggestions.map((airport) => ({
          label: `${airport.city} (${airport.iata})`,
          value: airport.iata,
        }));
      });


    } catch (error) {
      console.error("Error obteniendo las sugerencias de los aeropuertos: ", error);
    }
  };

  return (
    <AutoComplete
      style={{ width: 200 }}
      onSearch={fetchSuggestions}
      placeholder="Departure Airport"
      options={options}
      onSelect={handleChange}
    />
  );
};

export default DepartureAirport_Sel;