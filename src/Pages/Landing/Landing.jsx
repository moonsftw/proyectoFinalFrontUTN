import React from "react";
import "./Landing.css";
import { IoMdDownload } from "./../../assets/icons";
import { Footer, Header, VideoCards } from "../../Components";
import {
  DATA_VIDEO_CARDS_1 as videoCards1,
  DATA_VIDEO_CARDS_2 as videoCards2,
} from "../../Data";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container-landing">
      <section className="heroLanding">
        <Header className="main-header" />
        <div className="main-hero">
          <div className="hero-content-wrap">
            <div className="heroContainer">
              <h1 className="title primary-title">
                GROUP CHAT THAT'S ALL FUN & GAMES
              </h1>

              <p className="hero-description">
                Discord is great for playing games and chilling with friends, or
                even building a worldwide community. Customize your own space to
                talk, play, and hang out.
              </p>
            </div>
            <div className="hero-image">
              <img src="664daa37ea162cadf9603500_Art.webp" alt="" />
            </div>
          </div>
          <div className="hero-btn-group">
            <div className="containerBtnDownload">
              <IoMdDownload className="btn-download" />
              Download for Windows
            </div>

            {localStorage.getItem("formValues") && (
              <Link to={"/@me"}>
                <div className="btn btn-large btn-dark">
                  Open Discord in your browser
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
      <VideoCards props={videoCards1} />
      <div className="wrapper">
        <div className="item item1 ">TALK</div>
        <div className="item item2 ">
          <img src="/discordAnimate.webp" alt="" />
        </div>
        <div className="item item3 ">PLAY</div>
        <div className="item item4 ">
          <img src="/discordAnimate.webp" alt="" />
        </div>
        <div className="item item5 ">CHAT</div>
        <div className="item item6 ">
          <img src="/discordAnimate.webp" alt="" />
        </div>
        <div className="item item7 ">LISTEN</div>
        <div className="item item8 ">
          <img src="/discordAnimate.webp" alt="" />
        </div>
      </div>
      <VideoCards props={videoCards2} />
      <section className="download">
        <div className="remove-grid">
          <div className="download-container">
            <h2 className="title-download">
              YOU CAN'T SCROLL ANIMORE. BETTER GO CHAT.
            </h2>
            <a href="#" className="btn btn-large btn-brand">
              <IoMdDownload className="btn-download" />
              Download for Windows
            </a>
          </div>
          <img src="/lastBanner.webp" alt="" className="download-image" />
        </div>
      </section>

      <Footer className="found" />
    </div>
  );
};
export default Landing;
