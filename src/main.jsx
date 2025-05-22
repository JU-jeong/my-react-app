import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// React 애플리케이션의 진입점 파일 (main.jsx 또는 index.jsx)
// StrictMode: 개발 모드에서 잠재적인 문제를 감지하기 위한 래퍼 컴포넌트
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App 컴포넌트를 루트 DOM 노드에 렌더링 */}
    <App />
  </StrictMode>,
);