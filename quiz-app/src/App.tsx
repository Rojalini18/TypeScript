import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions/:id" element={<Question />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
