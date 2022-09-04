import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ThemeProvider from "./theme-provider";
import { store } from "./redux/store";
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
