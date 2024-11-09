import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherToday, setWeatherToday] = useState(null);
  const [weatherTomorrow, setWeatherTomorrow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // OpenWeatherMap API URL for Seattle (city ID: 5809844) with forecast data
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=47.6062&lon=-122.3321&units=imperial&appid=${apiKey}`
        );

        // Today's weather
        setWeatherToday({
          temp: response.data.list[0].main.temp,
          description: response.data.list[0].weather[0].description,
        });

        // Tomorrow's weather (data list increments every 3 hours, so 8*3 = 24 hours)
        setWeatherTomorrow({
          temp: response.data.list[8].main.temp,
          description: response.data.list[8].weather[0].description,
        });
      } catch (err) {
        setError("Failed to fetch weather data. Please try again later.");
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-6 bg-gray-800 text-gray-100 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Seattle Weather</h2>
      
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex justify-between items-center text-lg">
          {weatherToday ? (
            <div className="text-center">
              <p className="text-pink-500">Today:</p>
              <p className="text-4xl font-bold text-green-400">{weatherToday.temp}°F</p>
              <p className="text-gray-300 capitalize">{weatherToday.description}</p>
            </div>
          ) : (
            <p className="text-gray-400">Loading...</p>
          )}

          {weatherTomorrow ? (
            <div className="text-center">
              <p className="text-pink-500">Tomorrow:</p>
              <p className="text-4xl font-bold text-green-400">{weatherTomorrow.temp}°F</p>
              <p className="text-gray-300 capitalize">{weatherTomorrow.description}</p>
            </div>
          ) : (
            <p className="text-gray-400">Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Weather;
