import React, { useState } from 'react';
import './App.css';

function App() {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);

    const getWeather = () => {
        if (location) {
            fetch(`http://api.weatherapi.com/v1/current.json?key=a02b8e61e8b147a8b4633624242906&q=${location}`)
                .then(res => res.json())
                .then(data => {
                    setWeather(data);
                })
                .catch(err => console.error(err));
        } else {
            alert('Please enter a location.');
        }
    };

    return (
        <div className="container">
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Enter location" 
            />
            <button onClick={getWeather}>Get Weather</button>
            <div id="weather-result">
                {weather && (
                    <div>
                        <h2>Weather in {weather.location.name}</h2>
                        <p>Temperature: {weather.current.temp_c}°C</p>
                        <p>Condition: {weather.current.condition.text}</p>
                        <p>Is_day: {weather.current.is_day}</p>
                        <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
