import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom v6에서 변경된 부분
import Layout from "./components/Layout"; // Layout 컴포넌트 불러오기
import Login from "./pages/Login.jsx"; // Login 페이지
import Chats from "./pages/Chats.jsx"; // Chats 페이지
import Friends from "./pages/Friends.jsx"; // Friends 페이지

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
          <Route path="/chats" element={<Chats />} /> {/* 대화 페이지 */}
          <Route path="/friends" element={<Friends />} /> {/* 친구 페이지 */}
          <Route path="/" exact element={<Login />} />{" "}
          {/* 기본 라우트는 로그인 페이지로 설정 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
