import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "f57c433093e98536acc6a198344ecc18";

  const getData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    setWeatherData(response.data);
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getData}>Get Weather</button>

      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default App;
