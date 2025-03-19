import React from "react";
import group4 from "../../assets/group4.png"
import stars from "../../assets/stars.png"
import './WelcomeBox.css'
const WelcomeBox = () => {
    return(
        <div className="wrapper">
            <div className="leftSection">
                <h1 className="h">The Welcome Box
                    <img src={stars} alt="Stars"/>
                </h1>
                <p className="paragraph">
                    For the first delivery, every child receives the Welcome Box which is packed full of everything
                    they’ll need to kick off their outdoor fun of learning and discovery!
                </p>
                <ul className="listOfItems">
                    <li>Colorful backpack for all of your new gear</li>
                    <li>Treasure Map to collect your monthly badges as your progress through the subscription</li>
                    <li>Nature journal to keep track of your drawings and learnings</li>
                    <li>Booklet full of activities, games and learning material</li>
                </ul>
                <button className="getYourFirstBoxButton">
                    <span className="buttonText">Get Your First Box</span>
                </button>
            </div>

            <div className="rightSection">
                <img src={group4} alt="Picnic" className="picnicImage"/>
            </div>
        </div>
    );
};

export default WelcomeBox;