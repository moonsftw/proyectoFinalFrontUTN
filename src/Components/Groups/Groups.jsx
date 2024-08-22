import React from "react";
import "./Groups.css";
import img1 from "/groups/img1.png";
import img2 from "/groups/img2.png";
import img3 from "/groups/img3.png";
import img4 from "/groups/img4.png";
import dc from "/groups/dc.png";

import { useNavigate } from "react-router-dom";
import { FiPlus, AiFillCompass } from "@/assets/icons";

const Groups = () => {
  const groups = [img1, img2, img3, img4];
  const navigate = useNavigate();
  const { username, display } = JSON.parse(localStorage.getItem("formValues"));
  return (
    <>
      {username && (
        <div className="containerGroup">
          <div className="iconsGroup">
            <div>
              <button onClick={() => navigate("/")} className="iconDiscord">
                <img src={dc} alt="icon discord" className="discord" />
              </button>
            </div>
            <div>
              <button className="iconCompass">
                <AiFillCompass className="compass" />
              </button>

              <button className="iconPlus">
                <FiPlus className="plus" />
              </button>
            </div>
          </div>
          <div className="containerDatosUsuario">
            <h4>{username}</h4>
            <p>#{display}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Groups;
