const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

// 로그인 API
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "서버 에러" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "가입되지 않은 이름입니다." });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    res.status(200).json({ message: "로그인 성공", user });
  });
});

module.exports = router;
