import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherToday, setWeatherToday] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=47.6062&lon=-122.3321&units=imperial&appid=${apiKey}`
        );

        setWeatherToday({
          temp: response.data.list[0].main.temp,
          description: response.data.list[0].weather[0].description,
          icon: response.data.list[0].weather[0].icon,
        });
      } catch (err) {
        setError("Failed to fetch weather data. Please try again later.");
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-8 bg-gray-800 text-gray-100 shadow-lg rounded-lg flex flex-col items-center  max-w-xs mx-auto">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Seattle WA</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        weatherToday ? (
            <div className="text-center">
            <p className="text-pink-500 font-mono text-lg">Today’s Weather</p>
            {weatherToday.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherToday.icon}@2x.png`}
                alt="Weather Icon"
                className="mx-auto mb-2"
              />
            )}
            <p className="text-5xl font-bold text-green-400 mb-2">{Math.ceil(weatherToday.temp)}°F</p>
            <p className="text-gray-300 capitalize text-lg">{weatherToday.description}</p>
          </div>
          
        ) : (
          <p className="text-gray-400">Loading...</p>
        )
      )}
    </div>
  );
}

export default Weather;
