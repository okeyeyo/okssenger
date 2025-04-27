const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const db = require("./db");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("옥신저 백엔드 실행 중");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버 실행 중! http://localhost:${PORT}`);
});
