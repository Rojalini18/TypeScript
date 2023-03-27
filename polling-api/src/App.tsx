import React from 'react';
import AllRoutes from './Components/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
