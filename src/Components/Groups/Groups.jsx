import React from "react";
import "./Groups.css";
import img1 from "/img1.png";
import img2 from "/img2.png";
import img3 from "/img3.png";
import img4 from "/img4.png";
import dc from "/dc.png";
import { FiPlus } from "react-icons/fi";
import { AiFillCompass } from "react-icons/ai";
import { Link } from "react-router-dom";

const Groups = () => {
  const groups = [img1, img2, img3, img4];
  return (
    <div className="containerGroup">
      {/* Groups */}
      <div className="groups">
        {/* Discord */}
        <Link to={"/"}>
        <div className="iconDiscord">
          <img src={dc} alt="icon discord" className="discord" />
        </div>
        </Link>
        {/* Compass */}
        <div className="iconCompass">
          <AiFillCompass className="compass" />
        </div>

        {/* Group */}
        
          {groups.map((group) => {
            return (
              <div className="group">
                <img className="groupImg" src={group} alt="" key={group} />
              </div>
            );
          })}
       

        {/* Plus */}
        <div className="iconPlus">
          <FiPlus className="plus" />
        </div>
      </div>
    </div>
  );
};

export default Groups;
