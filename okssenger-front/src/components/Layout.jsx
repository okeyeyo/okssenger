import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import "../styles/App.css";

function Layout({ children }) {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [currentTime, setCurrentTime] = useState(""); // 초기값 빈 문자열로 설정

  // 현재 시간 업데이트 (1초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      // 24시간 형식으로 시간과 분만 표시
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit", // 2자리로 시간 표시
        minute: "2-digit", // 2자리로 분 표시
        hour12: false, // 24시간 형식
      });
      setCurrentTime(time);
    }, 1000); // 1초마다 업데이트

    // 컴포넌트 마운트 시 처음에 바로 현재 시간 반영
    setCurrentTime(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(interval);
  }, []); // 빈 배열을 두어 컴포넌트 마운트 시 한 번만 실행되도록

  // 배터리 정보 가져오기
  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(Math.floor(battery.level * 100));

        battery.addEventListener("levelchange", () => {
          setBatteryLevel(Math.floor(battery.level * 100));
        });
      });
    } else {
      console.log("Battery API 지원하지 않음.");
    }
  }, []);

  return (
    <div className="layout">
      <div className="status-bar">
        <div className="status-bar__column">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo"
            className="status-bar__title"
          />
        </div>
        <div className="status-bar__column">
          <div className="status-bar__clock">{currentTime}</div>
        </div>
        <div className="status-bar__column">
          <span className="status-bar__battery">
            {batteryLevel !== null ? `${batteryLevel}%` : "Loading..."}
          </span>
        </div>
      </div>
      <div className="layout-content">{children}</div>
      <NavBar />
    </div>
  );
}

export default Layout;
