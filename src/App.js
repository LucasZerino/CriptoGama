import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './Pages/Coin';
import Home from './Pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='coin/:id' element={<Coin/>}  />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
