import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Classes from "../pages/Classes"
import Contact from "../pages/Contact"
import Legals from "../pages/Legals"
import Container from "../components/Container";
import Header from "../components/Header"
import Footer from "../components/Footer";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Container>
          <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/classes' element={<Classes/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/legals' element={<Legals/>} />
          </Routes >
        </Container>
        <Footer />
      </div>
    </Router>
  );
}
