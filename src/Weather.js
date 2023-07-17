import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
      <p>
        <a
          href="https://github.com/thelunareclipse/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github Repository
        </a>
      </p>
    </div>
  );
}
