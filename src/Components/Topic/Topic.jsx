import React from "react";
import "./Topic.css";
const Topic = ({ title, icon }) => {
  return (
    <button className="containerTopic">
      <div className="containerIconTopic">{icon}</div>
      <p>{title}</p>
    </button>
  );
};

export default Topic;
