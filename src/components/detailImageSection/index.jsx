import React from "react";
import "./style.css";

const DetailImageSection = (sauceImageURL) => {
  let sauceImageToDisplay = sauceImageURL.imageURL;
  return (
    <div className="detail-image-container">
      <img alt="hotsauce" src={sauceImageToDisplay}></img>
    </div>
  );
};

export default DetailImageSection;
