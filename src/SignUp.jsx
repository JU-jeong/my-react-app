import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 추가

function SignUp() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate(); // 👈 추가

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    console.log('회원가입 정보:', form);

    // 👇 가입 완료 후 로그인 페이지로 이동
    alert("가입 완료! 로그인 페이지로 이동합니다");
    navigate('/login');
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="이름" onChange={handleChange} />
        <input name="email" type="email" placeholder="이메일" onChange={handleChange} />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;
