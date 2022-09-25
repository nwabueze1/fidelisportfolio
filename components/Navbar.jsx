import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        <a className="logo">Fidelis Okeke</a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <Link href="" className="sub-menu-item">
                Welcome
              </Link>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <Link href={"#services"}>Services</Link>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <Link href="#experience">Experience</Link>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <Link href="#projects">Projects</Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link href="#contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
