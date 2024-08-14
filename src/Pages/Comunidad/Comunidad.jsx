import React from "react";
import "./Comunidad.css";
import { Footer, Header } from "../../Components";
import * as icons from "./../../assets/icons";

const Comunidad = () => {
  const pruebaServer = [
    {
      id: 1,
      category: "gaming",
      title: "Blox Fruits",
      description:
        "The official community for the popular Roblox game known as Blox Fruits.",
      online: "353,279 Online",
      members: "1,750,000 Members",
      verified: true,
      partnered: false,
      banner: "/servers/banners/bloxFtruits.jpg",
      logo: "/servers/logos/bloxFtruits.jpg",
      about: 'This community is for the popular game called "Blox Fruits" on the ROBLOX platform. You can join this server if you would like to talk to other passionate players about the game, post fanart, find trades, or complete raids with others. With 1M+ members and growing, this is the best place for anything to do about Blox Fruits!',
      languages: 'english'
    },
  ];
  return (
    <>
      <main className="comunidad-container">
        <section className="comunidad-section-1">
          <Header className="main-header" />
        </section>
        <section className="comunidad-section-2"></section>
        <section className="comunidad-section-3"></section>
        <section className="comunidad-container-banner">
          <img
            className="comunidad-banner"
            src={pruebaServer[0].banner}
            alt=""
          />
          <img className="comunidad-logo" src={pruebaServer[0].logo} alt="" />
        </section>
        <section className="comunidad-section-4">
          <div className="comunidad-info-container">
            <div className="comunidad-title-container">
              {pruebaServer[0].verified && (
                <icons.FaRegCircleCheck className="check" />
              )}
              <h1 className="comunidad-title">{pruebaServer[0].title}</h1>
            </div>
            <p className="comunidad-description">{pruebaServer[0].description}</p>
            <div className="comunidad-online-members-container">
              <div className="dot-online"></div>
              <span className="comunidad-online">{pruebaServer[0].online}</span>
              <div className="dot-members"></div>
              <span className="comunidad-members">{pruebaServer[0].members}</span>
      
            </div>
            <div className="comunidad-line"></div>
            <h2 className="comunidad-about">About</h2>
            <p className="comunidad-about-description">{pruebaServer[0].about}</p>
            <h2 className="comunidad-languages">Supported Languages</h2>
            <p className="comunidad-languages-description">English</p>
          </div>
          <div className="comunidad-buttons">
            <button className="comunidad-btn-join">Join Server</button>
            <button className="comunidad-btn-share">Share Server</button>
          </div>
        </section>
      </main>
      <Footer className="found" />
    </>
  );
};

export default Comunidad;
