import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-jf8clsp5ojiwxyg8.us.auth0.com"
      clientId="4MZUChbF0P3MASBOR1hIoFlt7chXnAlg"
      authorizationParams={{
        redirect_uri: "https://bc-real-estate-web.vercel.app/"
      }}
      audience="https://real-estate-best-choice.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
