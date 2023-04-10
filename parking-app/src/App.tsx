import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Checkout } from "./Components/Checkout";
import { Parking } from "./Components/Parking";
import { Payment } from "./Components/Payment";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/parking" element={<Parking />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
