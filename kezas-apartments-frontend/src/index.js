import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApartmentProvider } from "./context/appContext";

ReactDOM.render(
  <ApartmentProvider>
    <App />
  </ApartmentProvider>,
  document.getElementById("root")
);
