import React from "react";
import "./App.css";
import Page from "./components/page";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Page />
      </div>
    </BrowserRouter>
  );
}

export default App;
