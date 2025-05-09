import React from "react";
import { FaSearch, FaComment, FaCog } from "react-icons/fa";
import Layout from "../components/Layout";
import "../styles/App.css";

function Chat() {
  return (
    <Layout hideNavBar>
      <div className="main-screen">
        <header className="screen-header">
          <h3 className="screen-header__title">친구</h3>
          <div className="screen-header__icons">
            <span>
              <FaSearch size={28} />
            </span>
            <span>
              <FaComment size={28} />
            </span>
            <span>
              <FaCog size={28} />
            </span>
          </div>
        </header>
      </div>
    </Layout>
  );
}

export default Chat;
