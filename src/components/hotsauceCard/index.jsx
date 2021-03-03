import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ info }) => {
  let sauceDetail = info.title;
  let detailPage = "/detail/" + sauceDetail;

  return (
    <div>
      <Link className="view-detail-link" to={detailPage}>
        <div class="card">
          <div class="card-image">
            <img alt="hotsauce" src={info.imageURL} />
          </div>
          <div class="card-text-area">
            <p>{info.title}</p>
            <span>{info.subtitle}</span>{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
