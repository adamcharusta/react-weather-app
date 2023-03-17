import React, { useContext } from 'react';
import AppContext from '../../appContext';

const WeatherPanelComponent = () => {
  const { geolocation } = useContext(AppContext);
  const jsonString = JSON.stringify(geolocation, null, 2);
  const jsonWithLineBreaks = jsonString.replace(/\n/g, '<br />');

  return <div dangerouslySetInnerHTML={{ __html: jsonWithLineBreaks }} />;
};

export default WeatherPanelComponent;
