import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { DateProvider } from "./Context/DateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DateProvider>
        <App />
      </DateProvider>
    </BrowserRouter>
  </React.StrictMode>
);