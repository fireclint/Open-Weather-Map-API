import React, { useState } from 'react';
import './index.css';

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
    <div className='app'>
      <main>
        <div>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            onKeyPress={search}
            type='text'
            placeholder='Search City'
            className='search'
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div className='content'>
            <h2>
              {weather.name} {weather.sys.country}
            </h2>
            <p>
              <span style={{ textTransform: 'capitalize', fontSize: '24px' }}>
                {weather.weather[0].main}
              </span>
            </p>
            <h1>{weather.main.temp.toFixed(0)}°F</h1>
            <div className='hilo'>
              <p>H: {weather.main.temp_max.toFixed(0)}°</p>
              <p>L: {weather.main.temp_min.toFixed(0)}°</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;
