import React from "react";
import BackToSauceList from "../../components/backToSauceList";

const DetailTitleSection = ({ title }) => {
  return (
    <div>
      <BackToSauceList />
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default DetailTitleSection;
