import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Présentation</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/classes">Réserve un cours</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
