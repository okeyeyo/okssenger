import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // 전역 CSS 파일 (선택 사항)
import App from "./App"; // App 컴포넌트를 불러옵니다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
