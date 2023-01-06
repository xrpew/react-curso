import React from "react";
import ReactDOM from "react-dom/client";
import { Counter2 } from "./Counter2";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <FirstApp  title='hola' subTitle={5} name='sergio'/>
     <CounterApp value={0}/>
  </React.StrictMode>
);
 