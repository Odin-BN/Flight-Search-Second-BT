import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';
import FlightList from '@/context/FlightList';

const Search_Button: React.FC = () => {
  const {handleSearch} = useContext(FlightSearchAmadeus);
  const {fetchFlights} = useContext(FlightList);
  //const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const Search = () => {
    handleSearch();

    //agregar condicion de espera

      /*setTimeout(() => {
        console.log("Termino el tiempo antes de solicitar la lista de vuelos encontrados");
        fetchFlights();
      }, 5000);*/
    fetchFlights();
    setTimeout(() => {
        //fetchFlights();
        console.log("Termino el tiempo antes de solicitar la lista de vuelos encontrados");
        navigate("/flightsDisp");
      }, 5000);

    //agregar condicion que revise si se logro hacer la bsuqeuda, y si si que cambie de pagina.
    //navigate("/flightsDisp");
  };

  return (
    <Flex gap="small" wrap>
      <Button type="primary" onClick={Search}>Search</Button>
    </Flex>
  );
};

export default Search_Button;