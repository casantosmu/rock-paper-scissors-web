import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MoveContextProvider from "./store/Move/context/MoveContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MoveContextProvider>
      <App />
    </MoveContextProvider>
  </React.StrictMode>
);
