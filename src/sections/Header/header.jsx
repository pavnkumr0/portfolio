import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Pavan</a>
            <div className="nav__menu">
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icons"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icons"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icons"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icons"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icons"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icons"></i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close"></i>
            </div>
            <div className="nav__toggle">
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header