import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import Rotate from "./rotate";

ReactDOM.render(
    <BrowserRouter>
        <DeviceOrientation lockOrientation={'landscape'}>
            <Orientation orientation='landscape' alwaysRender={false}>
                <App />
            </Orientation>
            <Orientation orientation='portrait' alwaysRender={false}>
                <Rotate />
            </Orientation>
        </DeviceOrientation>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
