import React from "react";
import footer_logo from "../../assets/footer_logo.png"
import drawing from "../../assets/drawing.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footer">
                <div className="leftContainer">
                    <img src={footer_logo} alt="Logo" className="logo"/>
                    <div className="iconContainer">
                        <div className="iconWrapper">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="iconWrapper">
                            <i className="fab fa-facebook"></i>
                        </div>
                        <div className="iconWrapper">
                            <i className="fab fa-youtube"></i>
                        </div>
                        <div className="iconWrapper">
                            <i className="fab fa-tiktok"></i>
                        </div>
                    </div>
                    <ul className="list">
                        <li className="listItem1">© 2022 | Wanlow</li>
                        <li className="listItem1">Privacy Policy</li>
                        <li className="listItem1">Terms & Conditions</li>
                    </ul>
                </div>
                <div className="middleContainer">
                    <ul className="list1">
                        <li className="listItem">Subscribe</li>
                        <li className="listItem">See What’s New</li>
                        <li className="listItem">Gift</li>
                        <li className="listItem">Support</li>
                        <li className="listItem">FAQs</li>
                    </ul>
                </div>
                <div className="rightContainer">
                    <div>
                        <p className="text">
                            Sign Up To Receive Exclusive Offers, Content And More!
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input"
                        />
                        <button className="signInButton">
                            <span className="buttonText">Sign In</span>
                        </button>
                    </div>
                    <img src={drawing} alt="Drawing" className="rightImage"/>
                </div>
            </div>
        </div>
    );
};
export default Footer;