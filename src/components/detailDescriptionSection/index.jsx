import React from "react";
import "./style.css";

const DetailDescriptionSection = ({ desc }) => {
  return (
    <div className="detail-description-section">
      <p>{desc}</p>
    </div>
  );
};

export default DetailDescriptionSection;
