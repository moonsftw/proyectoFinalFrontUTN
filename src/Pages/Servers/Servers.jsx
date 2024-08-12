import React from "react";
import "./Servers.css";
import { DISCORD_SERVERS as servers } from "../../Data/servers";
import { Header } from "../../Components";
import { CiSearch, AiFillCompass, FaGraduationCap,FiMonitor, TbAtom, GiConsoleController, BsMusicNoteBeamed } from "./../../../src/assets/icons";

const Servers = () => {
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
          <CiSearch className="server-input-search-icon" />
        </button>
      </div>
      <div className="filter-servers">
        <div className="servers-category">
          <div><AiFillCompass /> All</div>
          <div><GiConsoleController /> Gaming</div>
          <div><FiMonitor /> Entertainment</div>
          <div><FaGraduationCap /> Education</div>
          <div><TbAtom /> Science & Tech</div>
          <div><BsMusicNoteBeamed /> Music</div>
        </div>
        <div className="servers-match">
          {servers.map((server) => {
            return (
              <div className="server" key={server.id}>
                <div className="server-img-banner">
                  <img src={server.banner} alt="" />
                </div>
                <div className="server-content">
                  <div className="server-content-logo">
                    <img
                      src={server.logo}
                      alt=""
                      
                    />
                    <h1>{server.title}</h1>
                  </div>
                  <div className="server-content-descrip">
                    <p>{server.description}</p>
                    <div className="server-content-descrip-details">
                      <span>{server.online}</span>
                      <span>{server.members}</span>
                    </div>
                    <div className="server-content-descrip-insignias">
                      {server.verified && (
                        <span className="verified">Verified</span>
                      ) }
                      {server.partnered && (
                        <span className="partnered">Partnered</span>
                      ) }
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Servers;
