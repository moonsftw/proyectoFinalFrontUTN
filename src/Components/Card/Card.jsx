import React from "react";
import "./Card.css";
const Card = ({ size, description, title, profile, bg }) => {
  return (
    <div className="containerCard">
      {/* Banner  */}
      <div className="bannerCard">
        <img src={bg} alt="banner image" />
      </div>
      <div className="containerContent">
        {/* Profile Pic */}
        <div className="profilePic">
          <img src={profile} alt="" />
        </div>
        {/* Title */}
        <p className="containerTitle">{title}</p>
        {/* Description */}
        <p className="containerDescription">{description}</p>
        {/* Size */}
        <p className="containerSize">{size}</p>
      </div>
    </div>
  );
};

export default Card;
