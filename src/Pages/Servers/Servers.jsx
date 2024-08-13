import React, { useEffect, useState } from "react";
import "./Servers.css";
import {
  DISCORD_SERVERS as servers,
  SERVER_CATEGORIES as categories,
} from "../../Data";
import { Header } from "../../Components";
/* import { CiSearch, AiFillCompass, FaGraduationCap,FiMonitor, TbAtom, GiConsoleController, BsMusicNoteBeamed } from "./../../../src/assets/icons"; */
import * as icons from "./../../../src/assets/icons";
import CardServer from "../../Components/CardServer/CardServer";
const Servers = () => {
  const [category, setCategory] = useState("all");

  useEffect((event) => {}, [category]);
  return (
    <>
      <div className="hero-servers">
        <Header className="main-header" />
        <div className="hero-server-img">
          <img
            className="fondo-servers"
            src="/servers/main/fondoServers.svg"
            alt=""
          />
          <img
            className="izq-servers"
            src="/servers/main/leftServers.svg"
            alt=""
          />
          <img
            className="dcha-servers"
            src="/servers/main/rightServers.svg"
            alt=""
          />
        </div>
        <div className="hero-server-img-content">
          <h1 className="title-img">find your community on discord</h1>
          <p className="text-img">
            From gaming, to music, to learning, there's a place for you
          </p>
        </div>
      </div>
      <div className="server-input">
        <input type="text" placeholder="Explore Communitities" />
        <button>
          {/* <CiSearch className="server-input-search-icon" /> */}
          <icons.search className="server-input-search-icon" />
        </button>
      </div>
      <div className="filter-servers">
        <div className="servers-category">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                name={category.name}
                onClick={(e) => setCategory(e.target.name)}
              >
                <icons.AiFillCompass/>{category.name}
              </button>
            );
          })}
        </div>
        <div className="servers-match">
          {servers.map((server) => {
            return <CardServer server={server} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Servers;
