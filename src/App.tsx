import React from 'react';
import './App.css';
import Home from './pagina/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pagina/home/login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;