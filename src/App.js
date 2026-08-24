import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage';
import './index.css';

function App() {
  return (
    <div className="App bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit overflow-x-clip">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
