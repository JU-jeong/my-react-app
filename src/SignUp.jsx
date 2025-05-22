import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SignUp 컴포넌트
// 사용자의 회원가입 정보를 입력받아 로컬스토리지에 저장한 뒤, 로그인 페이지로 이동시킵니다.
function SignUp() {
  // form 상태: username, email, password 관리
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  // 인풋 변경 시 호출: 해당 name 필드에 입력값 업데이트
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 폼 제출 시 호출
  const handleSubmit = (e) => {
    e.preventDefault();

    // 빈 항목 체크
    if (!form.username || !form.email || !form.password) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    // 입력된 사용자 정보를 로컬스토리지에 저장
    localStorage.setItem('user', JSON.stringify(form));

    alert("가입 완료! 로그인 페이지로 이동합니다");
    // 가입 후 로그인 페이지로 라우팅
    navigate('/login');
  };

  return (
    <div>
      <h2>회원가입</h2>
      {/* 가입 폼 */}
      <form onSubmit={handleSubmit}>
        {/* 사용자 이름 입력 */}
        <input
          name="username"
          placeholder="이름"
          value={form.username}
          onChange={handleChange}
        />
        {/* 이메일 입력 */}
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
        />
        {/* 비밀번호 입력 */}
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
        />
        {/* 제출 버튼 */}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;
