import React, { useContext, useEffect } from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const Adults_Inp: React.FC = () => {
  const { adults, setAdults } = useContext(FlightSearchAmadeus);

  const onChange: InputNumberProps['onChange'] = (value) => {
    setAdults(String(value));
    };

  useEffect(() => {
            console.log(adults);
          }, [adults]);

  return (
    <InputNumber min={1} max={9} defaultValue={1} onChange={onChange} />
  );
};

export default Adults_Inp;