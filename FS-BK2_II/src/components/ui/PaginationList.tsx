import React, { useContext, useEffect } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import FlightList from '@/context/FlightList';

const Pagination_List: React.FC = () => {
    const {page_Sel, setPage_Sel} = useContext(FlightList);
    const {fetchFlights} = useContext(FlightList);
    //const [current, setCurrent] = useState(1);

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    //setCurrent(page);
    setPage_Sel(String(page));
    //fetchFlights();

    /*setTimeout(() => {
        fetchFlights();
        console.log("Termino el tiempo antes de solicitar otra pagina de datos");
      }, 5000);*/
  };

  useEffect(() => {
    console.log("Se detecto cambio de pagina: " + page_Sel);
    fetchFlights();
  }, [page_Sel]);

  return <Pagination defaultCurrent={1} onChange={onChange} total={50} showSizeChanger={false} align={'center'}/> ;
};

export default React.memo(Pagination_List);