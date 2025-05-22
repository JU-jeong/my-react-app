import { Link } from "react-router-dom";

// Navigation 컴포넌트
// 로그인 상태에 따라 보여지는 링크를 다르게 렌더링합니다.
function Navigation() {
  // localStorage에 저장된 로그인 상태를 boolean으로 가져옵니다.
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav>
      {isLoggedIn ? (
        // 로그인 상태(true)일 때:
        <>
          {/* 홈으로 이동하는 링크 */}
          <Link to="/">홈</Link>

          {/* 로그아웃 버튼 클릭 시 실행 */}
          <button onClick={() => {
            // 로그인 상태 정보를 제거
            localStorage.removeItem("isLoggedIn");
            // 로그인 페이지로 리다이렉트
            window.location.href = "/login";
          }}>
            로그아웃
          </button>
        </>
      ) : (
        // 로그인 상태(false)일 때:
        <>
          {/* 로그인 페이지로 이동하는 링크 */}
          <Link to="/login">로그인</Link>
          {/* 회원가입 페이지로 이동하는 링크 */}
          <Link to="/signup">회원가입</Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
