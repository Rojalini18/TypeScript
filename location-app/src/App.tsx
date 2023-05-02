import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import { Home } from "./Components/Home";
import { Map } from "./Components/Map";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
