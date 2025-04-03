import React, {useContext, useEffect} from 'react';
import { Switch } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const NonStop_Slider: React.FC = () => {

  const { nonStop, setNonStop } = useContext(FlightSearchAmadeus);


  const onChange = (checked: boolean) => {
    setNonStop(checked);
  };

  useEffect(() => {
            console.log(nonStop);
          }, [nonStop]);

  return (
    <Switch defaultChecked onChange={onChange} />
  );
};

export default NonStop_Slider;