import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // 전역 CSS 파일 (선택 사항)
import App from "./App"; // App 컴포넌트를 불러옵니다.

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트를 렌더링합니다. */}
  </React.StrictMode>,
  document.getElementById("root") // HTML의 'root' 요소에 렌더링합니다.
);
