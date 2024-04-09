import React from 'react';
import './App.css';
import Signup from './Signup';
import Signin from './Signin';
import DashBoard from './DashBoard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <DashBoard />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;