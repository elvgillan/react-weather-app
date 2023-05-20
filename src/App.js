import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          The project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/eringillan/"
            target="_blank"
            rel="noreferrer"
          >
            Erin Gillan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/elvgillan/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
