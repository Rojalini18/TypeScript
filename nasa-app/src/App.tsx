import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home} from "./Components/Home";
import {Asteroid} from "./Components/Asteroid";
import {RandomAsteroid} from "./Components/RandomAsteroid";


const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/asteroid" element={<Asteroid />} />
        <Route path="/random_asteroid" element={<RandomAsteroid />} />
      </Route>
    </Routes>
  );
};

export default App;