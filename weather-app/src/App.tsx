import * as React from "react";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import Capital from "./Pages/Capital";
import { Routes, Route } from "react-router-dom";


export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country/:country" element={<Country />} />
    <Route path="/weather/:capital" element={<Capital />} />
  </Routes>
)
