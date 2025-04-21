import React from "react";

function Layout({ children }) {
  return (
    <div>
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar__column">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            className="status-bar__title"
            alt="Okssenger Logo"
          />
        </div>
        <div className="status-bar__column">
          <div className="status-bar__clock"></div>
        </div>
        <div className="status-bar__column">
          <span className="status-bar__battery"></span>
        </div>
      </div>

      {/* Children is where we will render the page content */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
