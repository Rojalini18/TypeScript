import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Activity } from "./Components/Activity";
import { CreateActivity } from "./Components/CreateActivity";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/create_activity" element={<CreateActivity />} />
      </Routes>
    </div>
  );
}

export default App;
