// 필요한 패키지 불러오기
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// 앱 초기화
const app = express();

// 미들웨어 설정
app.use(cors()); // CORS 처리
app.use(bodyParser.json()); // JSON 파싱

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, Node.js backend!");
});

// 예시: 로그인 API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // 여기서 실제 인증 로직을 구현할 수 있습니다.
  if (username === "admin" && password === "password") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
