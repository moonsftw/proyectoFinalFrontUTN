import React from "react";
import "./Hero.css";
import {FiSearch, CiSearch} from '../../assets/icons'
const Hero = () => {
  return (
    <div className="containerHero">
      {/* Imagen de fondo */}
      <div className="hero">
        <img className="imgHero" src="./bg-image.png" alt="" />
      </div>
      {/* Overlay */}
      <div>
        <div className="overlay">
            
        </div>
      </div>
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
          <FiSearch className="iconSearch"/>
          {/* <CiSearch /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
