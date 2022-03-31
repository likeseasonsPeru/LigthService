import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand navbar-log" to="/">
            Light Service
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 w-100 justify-content-end">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/calculator">
                  Calculator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/link">
                  History
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};
