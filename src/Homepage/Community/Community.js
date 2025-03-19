import React from "react";
import kids from "../../assets/kids.jpg"
import group66 from "../../assets/group66.png"
import group781 from "../../assets/group781.png"
import { ReactComponent as StarIcon } from '../../assets/iconStar.svg';
import './Community.css'

const images = [
    kids,
    kids,
    kids,
    kids
];

const comments = [
    {
        name: "David C.",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        stars: 5
    },

];
const Community = () => {
    return (
        <div className="communityContainer">
            <h2 className="h1">What Are Our Adventurers Saying</h2>
            <div className="commentsContainer">
                <div className="sliderContainer">
                    <div className="arrowWrapper">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="commentGrid">
                        {comments.map((comment, index) => (
                            <div key={index} className="commentItem">
                                <div className="stars">
                                    {Array.from({length: comment.stars}, (_, i) => (
                                        <StarIcon key={i} className="starIcon"/>
                                    ))}
                                </div>
                                <p className="commentText">"{comment.text}"</p>
                                <p className="commenterName">- {comment.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="arrowWrapper">
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <img src={group781} alt="Map" className="mapImage"/>
            <h2 className="h1">Join Our Community!
                <img src={group66} alt="Stars"/>
            </h2>
            <div className="imagesContainer">
                <div className="sliderContainer">
                    <div className="arrowWrapper">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="imageGrid">
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`image-${index}`} className="communityImage"/>
                        ))}
                    </div>
                    <div className="arrowWrapper">
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <button className="followButton">
                <i className="fab fa-instagram"></i>
                <span className="followText">Follow Us</span>
            </button>
        </div>
    );
};
export default Community;
