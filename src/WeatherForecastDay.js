import React from "react";

export default function WeatherForecaseDay(props) {
  console.log(props);
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function weatherIcon() {
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return iconUrl;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <img
          code={weatherIcon()}
          alt="rainy day"
          className="WeatherForecast-icon"
        />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
