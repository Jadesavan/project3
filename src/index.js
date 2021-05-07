import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./timer";
import App from "./App"
import "./index.css"

var store=createStore(counter);

ReactDOM.render(
    <div>
    <Provider store={store}>
        <App/>
    </Provider>
    </div>,
    document.getElementById("container")
);