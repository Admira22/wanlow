import React from "react";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import './GridGallery.css'

const ImageGrid = () => {
    return (
        <div className="waveBackground">
        <div className="imageContainer">
            <div className="headingContainer">
                <h1 className="heading">Outdoor Fun Continues Each Month</h1>
                <p className="descriptionText">Each new box comes with products, activities, and a booklet with learning material and games</p>
            </div>
            <div className="imageItem image1">
                <img src={image1} alt="Child Reading" className="imageOfGallery" />
            </div>
            <div className="imageItem image2">
                <img src={image2} alt="Girl with Basket" className="imageOfGallery" />
            </div>

             <div className="textBox">
                <p>You can expect lots of different themes all built around learning and spending time outdoors like Animals, Star Gazing, Gardening, Parks, Outdoor Crafts & Games, and many more!</p>
                <button className="textBoxButton">Subscribe Now</button>
            </div>

            <div className="imageItem image3">
                <img src={image3} alt="Boy with Magnifying Glass" className='imageOfGallery'/>
            </div>
            <div className="imageItem image4">
                <img src={image4} alt="Smiling Girl with Butterfly" className='imageOfGallery' />
            </div>
        </div>
        </div>
    );
};
export default ImageGrid;

