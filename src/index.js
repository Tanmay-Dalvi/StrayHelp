import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

import { initializeApp } from 'firebase/app' 

const firebaseConfig = {
  apiKey: "AIzaSyCqC6VqLN9TsMjOlQN5-PBfle7Qlxbl9_Y",
  authDomain: "strayhelp-7d685.firebaseapp.com",
  projectId: "strayhelp-7d685",
  storageBucket: "strayhelp-7d685.appspot.com",
  messagingSenderId: "295520422671",
  appId: "1:295520422671:web:c35f4d1ad8c0b1cb048c7a",
  measurementId: "G-XSWY71TFM4"
};

initializeApp(firebaseConfig)

const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
