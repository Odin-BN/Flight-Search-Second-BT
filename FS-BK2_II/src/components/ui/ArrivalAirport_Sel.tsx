import React, {useContext, useEffect, useState} from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';
import { Airport } from './Airport';

const ArrivalAirport_Sel: React.FC = () => {
  const {destinationLocationCode, setDestinationLocationCode} = useContext(FlightSearchAmadeus);

  const handleChange = (value: string) => {
    setDestinationLocationCode(value);
  };

  useEffect(() => {
          console.log(destinationLocationCode);
        }, [destinationLocationCode]);

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
      placeholder="Arrival Airport"
      options={options}
      onSelect={handleChange}
    />
  );
};

export default ArrivalAirport_Sel;