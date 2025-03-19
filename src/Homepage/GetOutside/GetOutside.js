import React from "react";
import picnic from "../../assets/picnic.png";
import boy from "../../assets/boy.png";
import './GetOutisde.css'

const GetOutside = () => {
    return (
        <div className="container">
            <div className="gridContainer">
                <div className="imageWrapper">
                    <img src={picnic} alt="Picnic" className="image"/>
                </div>
                <div className="imageWrapper">
                    <img src={boy} alt="Boy" className="image"/>
                </div>
            </div>
            <div className="overlayText">Get Outside!</div>
            <div className="overlayText1">
                Monthly subscription box designed to get kids excited to spend more time outdoors and less time inside
                with their digital devices!
            </div>
            <button className="button">Get Started</button>
        </div>
    );
};
export default GetOutside;
