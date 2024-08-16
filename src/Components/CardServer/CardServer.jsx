import React from "react";
import * as icons from "../../assets/icons";
import "./CardServer.css";
import { Link } from "react-router-dom";
const CardServer = ({ servers, handleInputServers }) => {


  return servers.map((server) => {
    return (
      <Link to={`/server/${server.id}`} key={server.id}>
        <div className="server" key={server.id}>
          <div className="server-img-banner">
            <img src={server.banner} alt="" />
          </div>
          <div className="server-content">
            <div className="server-content-logo">
              <img src={server.logo} alt="" />
              <h1>{server.title}</h1>
            </div>
            <div className="server-content-descrip">
              <p>{server.description}</p>
              <div className="server-content-descrip-details">
                <span>{server.online}</span>·<span>{server.members}</span>
              </div>
              <div className="server-content-descrip-insignias">
                {server.verified && (
                  <span className="verified">
                    <icons.FaRegCircleCheck className="check" /> Verified
                  </span>
                )}
                {server.partnered && (
                  <span className="verified">
                    <icons.GiAbstract010 className="abstract" />
                    Partnered
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
};

export default CardServer;
