import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary shadow px-5">
      <div className="container-fluid d-flex align-items-center justify-content-between px-5 fw-bold">
        <a className="navbar-brand" href="/">
          Muhammad Umair
        </a>
        <ul className="navbar-nav d-flex gap-4">
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) return "text-decoration-underline";
                else return "text-decoration-none";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) return "text-decoration-underline";
                else return "text-decoration-none";
              }}
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) return "text-decoration-underline";
                else return "text-decoration-none";
              }}
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Sign In
            </a>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
