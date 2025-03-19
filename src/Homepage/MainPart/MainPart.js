import React from "react";
import Card from "../Card/Card";
import './MainPart.css'
import WelcomeBox from "../WelcomeBox/WelcomeBox";
import image1 from "../../assets/image1.png"
import path518 from "../../assets/Path 518.png"

const MainPart = () => {
    return (
        <div className="mainPart">
            <div className="cardPart">
                <h1 className="h1">How It Works</h1>
                <div className="cardContainer">

                    <Card
                        addition={path518}
                        image={image1}
                        number="1"
                        title="Order Your First Box"
                        description="You’ll start with the Welcome Box, followed by 12 amazing boxes to discover"
                    />
                    <Card
                        addition={path518}
                        image={image1}
                        number="2"
                        title="Delivered To Your Door"
                        description="Check your mailbox monthly"
                    />
                    <Card
                        addition={path518}
                        image={image1}
                        number="3"
                        title="Get Outside And Have Some Fun!"
                        description="In the backyard or the backcountry, Wanlow is designed to inspire kids to spend more time outdoors"
                    />
                </div>
            </div>
            <WelcomeBox/>
        </div>
    );
};
export default MainPart;