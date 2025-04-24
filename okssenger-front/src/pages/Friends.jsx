import React from "react";
import "../styles/App.css"; // 스타일 파일 import
import { FaMusic, FaSearch, FaUserPlus, FaCog } from "react-icons/fa"; // FontAwesome 아이콘 import
function Friends() {
  return (
    <main>
      <header className="screen-header">
        <h1 className="screen-header__title">친구</h1>
        <div className="screen-header__icons">
          <span>
            <FaSearch />
          </span>
          <span>
            <FaUserPlus />
          </span>
          <span>
            <FaMusic />
          </span>
          <span>
            <FaCog />
          </span>
        </div>
      </header>

      <main class="friends-screen">
        <div class="user-component">
          <div class="user-component__column">
            <img
              src="http://img.newspim.com/news/2017/01/31/1701311632536400.jpg"
              class="user-component__avatar user-component__avatar--xl"
            />
            <div class="user-component__text">
              <h4 class="user-component__name">홍길동</h4>
              <h6 class="user-component__introduce">
                아버지를 아버지라 부르지 못하다니
              </h6>
            </div>
          </div>
          <div class="user-component__column"></div>
        </div>
        <div class="frineds-screen__list">
          <div class="frineds-screen__list-header">
            <span>채널</span>
            <i class="fa-solid fa-chevron-down fa-xs"></i>
          </div>
          <div class="frineds-screen__list-header">
            <span>친구 3</span>
            <i class="fa-solid fa-chevron-up fa-xs"></i>
          </div>
          <div class="user-component">
            <div class="user-component__column">
              <img
                src="https://data.onnada.com/character/202503/thumb_1994052142_31a1e082__main1.png"
                class="user-component__avatar user-component__avatar--sm"
              />
              <div class="user-component__text">
                <h4 class="user-component__name">坂本太郎</h4>
                <h6 class="user-component__introduce">.</h6>
              </div>
            </div>
            <div class="user-component__column"></div>
          </div>
          <div class="user-component">
            <div class="user-component__column">
              <img
                src="https://data.onnada.com/character/201510/thumb_1030033395_23ae4c14_f305-s.jpg"
                class="user-component__avatar user-component__avatar--sm"
              />
              <div class="user-component__text">
                <h4 class="user-component__name">サイタマ</h4>
                <h6 class="user-component__introduce">
                  취미로 히어로를 하는 사람이다.
                </h6>
              </div>
            </div>
            <div class="user-component__column"></div>
          </div>
          <div class="user-component">
            <div class="user-component__column">
              <img
                src="https://avatars.githubusercontent.com/u/99576806?v=4"
                class="user-component__avatar user-component__avatar--sm"
              />
              <div class="user-component__text">
                <h4 class="user-component__name">인옥</h4>
                <h6 class="user-component__introduce">열심히 해보겠습니다..</h6>
              </div>
            </div>
            <div class="user-component__column-music">
              사랑의 미학 - 리도어
              <i class="fa-solid fa-circle-play" style="color: #d65838;"></i>
            </div>
          </div>
        </div>
      </main>

      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__btn">
            <a class="nav__link" href="friends.html">
              <i class="fa-solid fa-user fa-2x"></i>
            </a>
          </li>
          <li class="nav__btn">
            <a class="nav__link" href="chats.html">
              <span class="nav__notification badge">1</span>
              <i class="fa-regular fa-comment fa-2x"></i>
            </a>
          </li>
          <li class="nav__btn">
            <a class="nav__link" href="shopping.html">
              <i class="fa-solid fa-cart-shopping fa-2x"></i>
            </a>
          </li>
          <li class="nav__btn">
            <a class="nav__link" href="more.html">
              <i class="fa-solid fa-ellipsis fa-lg"></i>
              <div class="dot"></div>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Friends;
