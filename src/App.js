import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState([]);



  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        });
      setLocation('');
    }
  };




  return (
    <div className='App'>
      <div>
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          onKeyPress={search}
          type='text'
          placeholder='Search City'
        />
      </div>
      {typeof weather.main != 'undefined' ? (

      <div>
        <h2>{weather.name} {weather.sys.country}</h2>
        <p>{weather.weather[0].description}</p>
        <h1>{weather.main.temp}</h1>
        <div>
          <p>H {weather.main.temp_max}</p>
          <p>L {weather.main.temp_min}</p>
        </div>
      </div>
              ) : (
                ''
              )}
    </div>
  );
}

export default App;
