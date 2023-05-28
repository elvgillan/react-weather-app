import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/eringillan/"
            target="_blank"
            rel="noreferrer"
          >
            Erin Gillan
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/elvgillan/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
