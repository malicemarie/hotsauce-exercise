import React from "react";

const DetailImageSection = (sauceImageURL) => {
  let sauceImageToDisplay = sauceImageURL.imageURL;
  return (
    <div>
      <img alt="hotsauce" src={sauceImageToDisplay}></img>
    </div>
  );
};

export default DetailImageSection;
