import React from "react";
import DetailDescptionSection from "../../components/detailDescriptionSection";
import DetailImageSection from "../../components/detailImageSection";
import DetailTitleSection from "../../components/detailTitleSection";
// import hotsauces from "../../hotsauces.json";
import "./style.css";

const Detail = (props) => {
  let saucetoDisplay = props.location.state;
  let currentSauceID = saucetoDisplay.id;
  let sauceTitle = saucetoDisplay.title;
  let sauceDescription = saucetoDisplay.description;
  let sauceImageURL = saucetoDisplay.imageURL;

  return (
    <div>
      <DetailTitleSection key={currentSauceID} title={sauceTitle} />

      <DetailDescptionSection key={currentSauceID} desc={sauceDescription} />

      <DetailImageSection key={currentSauceID} imageURL={sauceImageURL} />
    </div>
  );
};

export default Detail;
