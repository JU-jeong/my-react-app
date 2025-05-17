// src/Login.jsx
import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', form);
    alert("로그인 시도 완료"); // 추후 서버 처리 가능
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="이메일" onChange={handleChange} />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;