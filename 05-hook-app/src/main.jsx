import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'



import "./index.css";
// import { Memorize } from "./06-memo/Memorize";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEfect/Layout";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks";
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWhitCustomHooks } from './01-useState/CounterWhitCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MemoHook } from "./06-memo/MemoHook";
// import { CallBackHook } from "./06-memo/CallBackHook";
// import './08-useReducer/intro-reducer'
// import { Padre } from "./07-tarea-memo/Padre";
// import { TodoApp } from "./08-useReducer/TodoApp";


import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>

);
