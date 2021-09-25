import Link from "next/link";
import React, { useState } from "react";

export const NavBar = () => {
  const [ham, setHam] = useState(false);
  return (
    <div>
      <nav className="nav">
        <Link href="/">
          <h1>{"Arnav's Blog"}</h1>
        </Link>
        <ul className="items">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Feedback</Link>
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
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="#">Feedback</Link>
        </li>
      </div>
    </div>
  );
};
