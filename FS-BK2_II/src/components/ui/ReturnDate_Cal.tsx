import React, {useContext, useEffect} from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';

const ReturnDate_Cal: React.FC = () => {
  const {returnDate, setReturnDate} = useContext(FlightSearchAmadeus);
  const {departureDate} = useContext(FlightSearchAmadeus);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    date;
    setReturnDate(String(dateString));
  };

  useEffect(() => {
        console.log(returnDate);
      }, [returnDate]);

  return(
  <Space direction="vertical">
    <DatePicker minDate={dayjs(departureDate, dateFormat)}
    onChange={onChange} />
  </Space>

);
};

export default ReturnDate_Cal;