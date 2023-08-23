import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import reducers from "./redux/reducers";
import "./assets/style/style.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <ToastContainer/>
        <App/>
    </Provider>
);

reportWebVitals();
