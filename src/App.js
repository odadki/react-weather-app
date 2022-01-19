import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather />
      <footer>
        This project is{" "}
        <a
          href="https://github.com/odadki/react-weather-app"
          target="blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        and coded by Danielle Oda
      </footer>
    </div>
  );
}

export default App;
