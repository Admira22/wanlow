import React from "react";
import './Card.css'

const Card = ({addition,image, number, title, description}) => {
    return (
        <div className="card">
            <img src={addition} alt="" className="addition"/>
            <img src={image} alt={title} className="imageOfCard"/>
            <div className="content">
                <div className="number">{number}</div>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

export default Card;
