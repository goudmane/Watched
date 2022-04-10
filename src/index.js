import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import MoviesProvider from "./context/moviesContext";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <MoviesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MoviesProvider>
);
