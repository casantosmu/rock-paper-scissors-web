import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RoomContextProvier from "./store/Room/context/RoomContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoomContextProvier>
      <App />
    </RoomContextProvier>
  </React.StrictMode>
);
