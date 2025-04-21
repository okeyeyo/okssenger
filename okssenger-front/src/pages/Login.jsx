import React, { useState } from "react";
import "../styles/Login.css"; // 스타일 파일 import

function LoginPage() {
  const [passwordType, setPasswordType] = useState("password");
  const [iconClass, setIconClass] = useState("fa-eye");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 비밀번호 타입 토글
  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setIconClass((prevClass) =>
      prevClass === "fa-eye" ? "fa-eye-slash" : "fa-eye"
    );
  };

  // 로그인 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에 추가 (예: API 호출)
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-box">
      <header className="welcom-header">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="welcom-header__logo"
          alt="Logo"
        />
        <h1 className="welcom-header__title">옥신저</h1>
      </header>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form__input">
          <span className="login-form__input__id-icon">
            <i
              className="fa-solid fa-user fa-sm"
              style={{ color: "#a58164" }}
            ></i>
          </span>
          <input
            name="username"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login-form__input">
          <span className="login-form__input__pass-icon">
            <i
              className="fa-solid fa-lock fa-sm"
              style={{ color: "#a58164" }}
            ></i>
          </span>
          <input
            name="password"
            type={passwordType} // 비밀번호 타입을 상태로 관리
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-form__password">
            <i
              className={`fa-solid ${iconClass} toggle-password`} // 아이콘 클래스 동적 변경
              style={{ color: "#a58164" }}
              onClick={togglePassword} // 비밀번호 표시 토글
            ></i>
          </div>
        </div>

        <input
          className="login-form__btn"
          type="submit"
          value="로그인"
          style={{ fontFamily: "Jua" }}
        />
        <div className="login-form__a">
          <a href="#">회원가입</a>
          <a href="#">비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
