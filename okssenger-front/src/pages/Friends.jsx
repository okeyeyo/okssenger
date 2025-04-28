import React from "react";
import "../styles/App.css"; // 스타일 파일 import
import {
  FaMusic,
  FaSearch,
  FaUserPlus,
  FaCog,
  FaPlayCircle,
  FaUser,
  FaComment,
  FaShoppingCart,
  FaEllipsisH,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"; // FontAwesome 아이콘 import
function Friends() {
  return (
    <main className="main-screen">
      <header className="screen-header">
        <h3 className="screen-header__title">친구</h3>
        <div className="screen-header__icons">
          <span>
            <FaSearch size={28} />
          </span>
          <span>
            <FaUserPlus size={28} />
          </span>
          <span>
            <FaCog size={28} />
          </span>
        </div>
      </header>

      <main className="friends-screen">
        <div className="user-component">
          <div className="user-component__column">
            <img
              src="http://img.newspim.com/news/2017/01/31/1701311632536400.jpg"
              className="user-component__avatar user-component__avatar--xl"
              alt="User Avatar"
            />
            <div className="user-component__text">
              <h4 className="user-component__name">홍길동</h4>
              <h6 className="user-component__introduce">
                아버지를 아버지라 부르지 못하다니
              </h6>
            </div>
          </div>
          <div className="user-component__column"></div>
        </div>
        <div className="frineds-screen__list">
          <div className="frineds-screen__list-header">
            <span>채널</span>
            <FaChevronDown size={18} color="var(--gray-color)" />
          </div>
          <div className="frineds-screen__list-header">
            <span>친구 3</span>
            <FaChevronUp size={18} color="var(--gray-color)" />
          </div>
          <div className="user-component">
            <div className="user-component__column">
              <img
                src="https://data.onnada.com/character/202503/thumb_1994052142_31a1e082__main1.png"
                className="user-component__avatar user-component__avatar--sm"
                alt="User Avatar"
              />
              <div className="user-component__text">
                <h4 className="user-component__name">坂本太郎</h4>
                <h6 className="user-component__introduce">.</h6>
              </div>
            </div>
            <div className="user-component__column"></div>
          </div>
          <div className="user-component">
            <div className="user-component__column">
              <img
                src="https://data.onnada.com/character/201510/thumb_1030033395_23ae4c14_f305-s.jpg"
                className="user-component__avatar user-component__avatar--sm"
                alt="User Avatar"
              />
              <div className="user-component__text">
                <h4 className="user-component__name">サイタマ</h4>
                <h6 className="user-component__introduce">
                  취미로 히어로를 하는 사람이다.
                </h6>
              </div>
            </div>
            <div className="user-component__column"></div>
          </div>
          <div className="user-component">
            <div className="user-component__column">
              <img
                src="https://avatars.githubusercontent.com/u/99576806?v=4"
                className="user-component__avatar user-component__avatar--sm"
                alt="User Avatar"
              />
              <div className="user-component__text">
                <h4 className="user-component__name">인옥</h4>
                <h6 className="user-component__introduce">
                  열심히 해보겠습니다..
                </h6>
              </div>
            </div>
            <div className="user-component__column-music">
              사랑의 미학 - 리도어
              <FaPlayCircle color="#d65838" />
            </div>
          </div>
        </div>
      </main>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__btn">
            <a className="nav__link" href="friends.html">
              <FaUser size={30} />
            </a>
          </li>
          <li className="nav__btn">
            <a className="nav__link" href="chats.html">
              <span className="nav__notification badge">1</span>
              <FaComment size={30} />
            </a>
          </li>
          <li className="nav__btn">
            <a className="nav__link" href="shopping.html">
              <FaShoppingCart size={30} />
            </a>
          </li>
          <li className="nav__btn">
            <a className="nav__link" href="more.html">
              <FaEllipsisH size={30} />
              <div className="dot"></div>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Friends;
