import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      //domain="carlosazaustre.eu.auth0.com"
      domain="dev-zdjwfe9w.us.auth0.com"
      //clientId="w7SEmuLWO4OlvK3Yu6jHKljQKYlVk7Lb"
      clientId="bCdKRuKzF9eEObttT27Cbg8DWsG4Hh32"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
