import React from "react";
import "./header.css";
import logoImg from '../../assets/images/9d74722c-13d9-4990-b6eb-608dfcce7a56_logo.avif'

const Header = () => {
  return (
    <>
      <header>
      <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact Us </a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
            <div className="nav-logo">
                <img src={logoImg} alt="" />
                <h1 className="logo">Housie Mania</h1>
            </div>
        </div>
    </nav>
      </header>
    </>
  );
};

export default Header;
