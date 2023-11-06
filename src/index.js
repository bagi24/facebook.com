import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvaider } from "./context/darkModeContext";
import { AuthContextProvaider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvaider>
      <AuthContextProvaider>
        <App />
      </AuthContextProvaider>
    </DarkModeContextProvaider>
  </React.StrictMode>
);
