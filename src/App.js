import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">
        <em>
          <strong>Weather</strong>
          <span className="app-style">App</span>
        </em>
      </h1>
      <Weather defaultCity="New York" />
      <footer>
        This project is{" "}
        <a
          href="https://github.com/odadki/react-weather-app"
          target="blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        and coded by Danielle Oda
      </footer>
    </div>
  );
}

export default App;
