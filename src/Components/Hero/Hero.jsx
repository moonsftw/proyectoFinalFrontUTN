import React from "react";
import "./Hero.css";
import { FiSearch } from "../../assets/icons";
const Hero = () => {
  return (
    <div className="containerHero">
      {/* Imagen de fondo */}
      <div className="hero">
        <img className="imgHero" src="/hero2.webp" alt="" />
      </div>
      {/* Overlay */}

      <div className="overlay"></div>

      {/* Filtro de búsqueda */}
      <div className="contentImg">
        <p className="textImg">Encuentra tu comunidad en Discord</p>
        <span className="subTextImg">
          
          Juegos, música, estudio, seguro hay un lugar para vos
        </span>
        <div className="containerInput">
          <input
            className="inputImg"
            type="search"
            placeholder="Buscar comunidad"
          />
          <FiSearch className="iconSearch" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
