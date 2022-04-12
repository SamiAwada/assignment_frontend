import React from "react";
import logo from "../../../logo.svg";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className=" container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className=" container-fluid">
          <NavLink className="navbar-brand" to="/History">
            <img src={logo} className="App-logo" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Artists"
                >
                  Artists
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/History">
                  History
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
