import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './routes/Top';
import Product from './routes/Product';
import Sale from './routes/Sale';
import SignUp from './SignUp';
import Login from './Login'; // 👈 추가

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* 👈 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;