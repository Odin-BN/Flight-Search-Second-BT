import React, {useContext, useEffect} from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';
//Ponerle que el valor minimo sea la fecha de hoy

dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';

const DepartureDate_Cal: React.FC = () => {
  const { departureDate, setDepartureDate } = useContext(FlightSearchAmadeus);
  
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    date;
    setDepartureDate(String(dateString));
  };

  useEffect(() => {
      console.log(departureDate);
    }, [departureDate]);

  return (
  <Space direction="vertical">
    <DatePicker defaultValue={dayjs('2025-03-26', dateFormat)}
    minDate={dayjs('2025-03-26', dateFormat)}
    onChange={onChange} />
  </Space>

  );
};

export default DepartureDate_Cal;