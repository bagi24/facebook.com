import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvaider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvaider>
      <App />
    </DarkModeContextProvaider>
  </React.StrictMode>
);
