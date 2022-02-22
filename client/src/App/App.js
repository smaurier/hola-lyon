import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Classes from "../pages/Classes"
import Contact from "../pages/Contact"
import Legals from "../pages/Legals"
import Container from "../components/Container";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header>
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
              <li>
                <NavLink to="/legals">Mentions légales</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Container>
          <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/classes' element={<Classes/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/legals' element={<Legals/>} />
          </Routes >
        </Container>
      </div>
    </Router>
  );
}
