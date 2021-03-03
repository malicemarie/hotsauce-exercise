import React from "react";
import hotsauces from "../../hotsauces.json";
import BackToSauceList from "../../components/backToSauceList";
import "./style.css";

const Detail = () => {
  return (
    <div>
      <div>
        <BackToSauceList />
      </div>
      <div class="card">
        <div class="card-image">
          <img alt="hotsauce" src={hotsauces.imageURL} />
        </div>
        <div class="card-text-area">
          <p>{hotsauces.title}</p>
          <span>{hotsauces.subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
