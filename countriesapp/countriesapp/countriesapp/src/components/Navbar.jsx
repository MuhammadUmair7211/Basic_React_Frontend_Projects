import React, { useState } from "react";
const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          Countries App
        </a>
        <button
          onClick={function () {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);
          }}
          className="d-flex align-items-center gap-2 border-0 shadow px-2 py-1 btn btn-outline-secondary"
          role="search"
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
