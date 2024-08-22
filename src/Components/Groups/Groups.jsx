import React from "react";
import "./Groups.css";

import dc from "/groups/dc.png";

import { useNavigate } from "react-router-dom";
import { FiPlus, AiFillCompass } from "@/assets/icons";

const Groups = () => {

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
