import React from "react";
import DetailDescptionSection from "../../components/detailDescriptionSection";
import DetailImageSection from "../../components/detailImageSection";
import DetailTitleSection from "../../components/detailTitleSection";
import BackToSauceList from "../../components/backToSauceList";
// import hotsauces from "../../hotsauces.json";
import "./style.css";

const Detail = (props) => {
  let saucetoDisplay = props.location.state;
  let currentSauceID = saucetoDisplay.id;
  let sauceTitle = saucetoDisplay.title;
  let sauceDescription = saucetoDisplay.description;
  let sauceImageURL = saucetoDisplay.imageURL;

  return (
    <div className="detail-page">
      <BackToSauceList />
      <div className="left-side-detail">
        <div className="detail-title-section">
          <DetailTitleSection key={currentSauceID} title={sauceTitle} />
        </div>
        <DetailImageSection key={currentSauceID} imageURL={sauceImageURL} />
      </div>
      <div className="right-side-detail">
        <DetailDescptionSection key={currentSauceID} desc={sauceDescription} />
      </div>
    </div>
  );
};

export default Detail;
