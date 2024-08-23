import React from "react";
import "./Comunidad.css";
import { Footer, Header } from "@/Components";
import * as icons from "@/assets/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DISCORD_SERVERS as servers} from "@/Data";
import { useGlobalContext } from "../../Context/GlobalContext";

const Comunidad = () => {
  const parametros = useParams();

  const { obtenerServerId } = useGlobalContext();
  const comunidad = obtenerServerId(parametros.id)

  const navigate = useNavigate();

  return (
    <>
      <Header className="main-header" />
      <main className="comunidad-container">
       
      
        <section className="comunidad-container-banner">
          <img
            className="comunidad-banner"
            src={comunidad.banner}
            alt=""
          />
          <img className="comunidad-logo" src={comunidad.logo} alt="" />
        </section>
        <section className="comunidad-section-4">
          <div className="comunidad-info-container">
            <div className="comunidad-title-container">
              <img
                className="comunidad-logo"
                src={comunidad.logo}
                alt=""
              />
              {comunidad.verified && (
                <icons.FaRegCircleCheck className="check" />
              )}
              <h1 className="comunidad-title">{comunidad.title}</h1>
            </div>
            <p className="comunidad-description">
              {comunidad.description}
            </p>
            <div className="comunidad-online-members-container">
              <div className="dot-online"></div>
              <span className="comunidad-online">{comunidad.online}</span>
              <div className="dot-members"></div>
              <span className="comunidad-members">
                {comunidad.members}
              </span>
            </div>
            <div className="comunidad-line"></div>
            <h2 className="comunidad-about">About</h2>
            <p className="comunidad-about-description">
              {comunidad.about}
            </p>
            <h2 className="comunidad-languages">Supported Languages</h2>
            <p className="comunidad-languages-description">English</p>
          </div>
          <div className="comunidad-buttons">
            <button onClick={() => navigate("/invite")} className="comunidad-btn-join">Join Server</button>
            <button className="comunidad-btn-share">Share Server</button>
          </div>
        </section>
      </main>
      <Footer className="found" />
    </>
  );
};

export default Comunidad;
