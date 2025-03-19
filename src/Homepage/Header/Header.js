import React from "react";
import { ReactComponent as PersonIcon } from '../../assets/person.svg';
import { ReactComponent as BackpackIcon } from '../../assets/backpack.svg';
import logo from "../../assets/logo.png"
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="navList">
                    <div className="leftMenu">
                        <li><a href="/about_us" className="navItem">About Us </a></li>
                        <li><a href="/faqs" className="navItem">FAQs</a></li>
                        <li><a href="/contactus" className="navItem">Contact Us</a></li>
                    </div>
                    <li className="logoContainer">
                        <img src={logo} alt="Logo"/>
                    </li>
                    <div className="rightMenu">
                        <li><a href="/getstarted" className="navItem">Get Started</a></li>
                        <li><PersonIcon className="iconH"/></li>
                        <li><BackpackIcon className="iconH"/></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
