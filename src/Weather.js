import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <div>
          <h1>New York, NY, USA</h1>
          <ul>
            <li>Tuesday 03:00PM</li>
            <li>Partly Cloudy</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Partly Cloudy"
          />
          8°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 13%</li>
            <li>Wind: 3 Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
