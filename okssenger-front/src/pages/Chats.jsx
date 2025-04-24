import React from "react";
import {
  FaSearch,
  FaUser,
  FaComment,
  FaEllipsisH,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa"; // FontAwesome 아이콘 import
import "../styles/App.css"; // 스타일 파일 import

function Main() {
  return (
    <div>
      <header className="screen-header">
        <h1 className="screen-header__title">대화</h1>
        <div className="screen-header__icons">
          <span>
            <FaSearch />
          </span>
          <span>
            <FaComment />
          </span>
          <span>
            <FaCog />
          </span>
        </div>
      </header>

      <main className="main-screen">
        <a href="chat.html">
          <div className="user-component">
            <div className="user-component__column">
              <img
                src="https://data.onnada.com/character/202503/thumb_1994052142_31a1e082__main1.png"
                className="user-component__avatar"
                alt="User Avatar"
              />
              <div className="user-component__text">
                <h4 className="user-component__name">坂本太郎</h4>
                <h6 className="user-component__introduce">
                  キムさん、お誕生日おめでとうございます。
                </h6>
              </div>
            </div>
            <div className="user-component__column user-component__alarm">
              <span className="user-component__time">07:57</span>
              <div className="badge">1</div>
            </div>
          </div>
        </a>
      </main>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__btn">
            <a className="nav__link" href="friends.html">
              <FaUser />
            </a>
          </li>
          <li className="nav__btn">
            <a className="nav__link" href="chats.html">
              <span className="nav__notification badge">1</span>
              <FaComment />
            </a>
          </li>
          <li className="nav__btn">
            <a className="nav__link" href="shopping.html">
              <FaShoppingCart />
            </a>
          </li>
          <li className="nav__btn">
            <a className="nav__link" href="more.html">
              <FaEllipsisH />
              <div className="dot"></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Main;
