import React, { useState } from "react";

export const NavBar = () => {
  const [ham, setHam] = useState(false);
  return (
    <div>
      <nav className="nav">
        <a href="/">
          <h1>Arnav's Blog</h1>
        </a>
        <ul className="items">
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
        <div className="hamburger">
          <button
            className="nav-button"
            onClick={(e) => {
              setHam(!ham);
            }}
          >
            <img src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" />
          </button>
        </div>
      </nav>

      <div className="external" style={{ display: !ham ? "none" : "grid" }}>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </div>
    </div>
  );
};
