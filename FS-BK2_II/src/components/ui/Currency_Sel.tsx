import React, {useContext, useEffect} from 'react';
import { Select, Space } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const Currency_Sel: React.FC = () => {
  const { currencyCode, setCurrencyCode } = useContext(FlightSearchAmadeus);
  
  const handleChange = (value: string) => {
    setCurrencyCode(value)
  };
  
  useEffect(() => {
            console.log(currencyCode);
          }, [currencyCode]);

  return (
  <Space wrap>
    <Select
      
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'EUR', label: 'EUR' },
        { value: 'MXN', label: 'MXN' },
        { value: 'USD', label: 'USD' },
      ]}
    />
  </Space>
);
};

export default Currency_Sel;