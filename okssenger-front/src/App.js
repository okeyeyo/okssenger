import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom v6에서 변경된 부분
import Layout from "./components/Layout"; // Layout 컴포넌트 불러오기
import Login from "./pages/Login"; // Login 페이지
// import About from './About'; // About 페이지
// import Contact from './Contact'; // Contact 페이지

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {" "}
          {/* Routes로 변경 */}
          <Route path="/" element={<Login />} /> {/* element로 컴포넌트 전달 */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
