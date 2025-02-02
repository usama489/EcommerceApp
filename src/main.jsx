import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "@material-tailwind/react";
import appStore from "./redux/appStore.jsx"
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
