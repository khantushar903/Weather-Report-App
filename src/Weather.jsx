import React from 'react'

const Weather = ({weatherData}) => {
  return (
    <div className='weather-card'>
        <h2>{weatherData.name}</h2>
        <p>{weatherData.main.temp}°C</p>
        <p>{weatherData.weather[0].main}</p>
    </div>
  )
}

export default Weather