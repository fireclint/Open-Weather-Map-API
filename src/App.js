import React, { useState } from 'react';
import {
  Container,
  Main,
  Search,
  WeatherDisplay,
  WeatherLocation,
  WeatherDescription,
  Temp,
  TempRange,
  TempRangeTxt,
} from './components/Styles';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState([]);

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        });
      setLocation('');
    }
  };

  return (
    <Container>
      <Main>
        <div>
          <Search
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            onKeyPress={search}
            type='text'
            placeholder='Search City'
            className='search'
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <WeatherDisplay>
            <WeatherLocation>
              {weather.name} {weather.sys.country}
            </WeatherLocation>
            <WeatherDescription>
              <span style={{ textTransform: 'capitalize', fontSize: '24px' }}>
                {weather.weather[0].main}
              </span>
            </WeatherDescription>
            <Temp>{weather.main.temp.toFixed(0)}°F</Temp>
            <TempRange>
              <TempRangeTxt>
                H: {weather.main.temp_max.toFixed(0)}°
              </TempRangeTxt>
              <TempRangeTxt>
                L: {weather.main.temp_min.toFixed(0)}°
              </TempRangeTxt>
            </TempRange>
          </WeatherDisplay>
        ) : (
          ''
        )}
        <br />
      </Main>
    </Container>
  );
}

export default App;
