import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BackToSauceList = () => {
  return (
    <div className="back-to-grid">
      <Link to={"/"}>
        <h2> Back to Hot Sauce List</h2>
      </Link>
    </div>
  );
};

export default BackToSauceList;
