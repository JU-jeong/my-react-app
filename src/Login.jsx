import React, { useState } from 'react';
// useNavigate: 로그인 성공 시 다른 페이지로 이동하기 위한 훅
import { useNavigate } from 'react-router-dom';

function Login() {
  // form 상태: email, password 관리
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // 인풋 변경 시 호출: name 속성에 따라 form 상태 업데이트
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 폼 제출 시 호출
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로컬스토리지에서 저장된 사용자 정보 읽기
    const savedUser = JSON.parse(localStorage.getItem('user'));

    // 회원 정보가 없으면 경고
    if (!savedUser) {
      alert("등록된 회원 정보가 없습니다.");
      return;
    }

    // 입력값과 저장된 값 비교
    if (form.email === savedUser.email && form.password === savedUser.password) {
      alert("로그인 성공!");
      // 로그인 상태를 로컬스토리지에 저장
      localStorage.setItem("isLoggedIn", "true");
      // 홈(또는 원하는 경로)으로 이동
      navigate('/');
    } else {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      {/* 로그인 폼 */}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange} // 입력 변경 핸들러
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange} // 입력 변경 핸들러
        />
        <button type="submit">로그인</button>
      </form>

      {/* 회원가입 페이지로 이동하는 버튼 */}
      <button
        onClick={() => navigate('/signup')}
        style={{ marginTop: '10px' }}
      >
        회원가입 하러 가기
      </button>
    </div>
  );
}

export default Login;