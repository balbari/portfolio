import React, { useState } from 'react'
import '../css/Header.css'


function Header({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='header'>
      <h1>
        <img src='./logo.png' alt='logo'></img>
        <span>Yeo Suyeon's Portfolio</span>
      </h1>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className='pc'>
          <li><button onClick={() => scrollToSection({ current: document.querySelector('#home') })}>Home</button></li>
          <li><button onClick={() => scrollToSection({ current: document.querySelector('#projects') })}>My Projects</button></li>
          <li><button onClick={() => scrollToSection({ current: document.querySelector('#contact') })}>Contact Me</button></li>
        </ul>
        <button class="hamburger" onClick={toggleMenu}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className="close_btn" onClick={closeMenu}>×</button>
          <ul>
          <li><button onClick={() => scrollToSection({ current: document.querySelector('#home') })}>Home</button></li>
          <li><button onClick={() => scrollToSection({ current: document.querySelector('#projects') })}>My Projects</button></li>
          <li><button onClick={() => scrollToSection({ current: document.querySelector('#contact') })}>Contact Me</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
