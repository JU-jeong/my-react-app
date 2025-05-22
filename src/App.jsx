import React from 'react';
// BrowserRouter: 앱 전체를 감싸서 라우팅 기능을 제공
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 각 페이지 컴포넌트 import
import Top from './routes/Top';       // 메인 또는 랜딩 페이지
import Product from './routes/Product'; // 상품 목록 페이지
import Sale from './routes/Sale';     // 세일 상품 페이지
import SignUp from './SignUp';        // 회원가입 페이지
import Login from './Login';          // 로그인 페이지 

function App() {
  return (
    // BrowserRouter로 라우터를 시작
    <BrowserRouter>
      {/* Routes 내부에 정의된 path에 따라 element를 렌더링 */}
      <Routes>
        {/* 기본 경로: 회원가입 페이지로 이동 */}
        <Route path="/" element={<SignUp />} />

        {/* /product 경로: Product 컴포넌트 렌더링 */}
        <Route path="/product" element={<Product />} />

        {/* /sale 경로: Sale 컴포넌트 렌더링 */}
        <Route path="/sale" element={<Sale />} />

        {/* /signup 경로: SignUp 컴포넌트 렌더링 ("/"와 동일) */}
        <Route path="/signup" element={<SignUp />} />

        {/* /login 경로: Login 컴포넌트 렌더링 👈 새로 추가 */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;