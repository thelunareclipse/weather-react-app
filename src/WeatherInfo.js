import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherConversion from "./WeatherConversion";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <div>
          <h1>{props.data.city}</h1>
          <ul>
            <div>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} className="WeatherInfo-icon"/>
          <WeatherConversion celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
