import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./Components/PageStructure/Footer";
import "./index.css";

ReactDOM.render(
  [<App key="1" />, <Footer key="2" />],
  document.getElementById("root")
);
