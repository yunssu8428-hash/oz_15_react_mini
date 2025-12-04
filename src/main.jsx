<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MovieDetail from "./components/MovieDetail.jsx";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<App />} />
        <Route path="/details" element={<MovieDetail />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
>>>>>>> b5fc9592ccdbc038835f0f418027191fd2ddeb4d
