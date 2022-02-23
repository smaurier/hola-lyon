import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <span>2022-HOLA-LYON |</span>
      <nav>
        <ul>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/legals">Mentions légales</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
