import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counterComponent.jsx";
//import Background from "./components/backgroundComp.jsx";
import Counters from "./components/counters.jsx";
import Facade from "./components/facade.jsx";

ReactDOM.render(<Facade />, document.getElementById("root"));
//ReactDOM.render(<Background />, document.getElementById("root"));
