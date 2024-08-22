import React from "react";
import "./Landing.css";
import { IoMdDownload } from "./../../assets/icons";
import { Footer, Header, VideoCards } from "../../Components";
import { VIDEOS_CARDS } from "../../Data";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { GiDuration } from "react-icons/gi";
import Reviews from "../../Components/Reviews/Reviews";
import '@/index.css'
const Landing = () => {
  const [videos1, videos2] = VIDEOS_CARDS;
  const navigate = useNavigate();

  return (
    <>
      <Header className="main-header" color={"#fff"} />
      <section className="landing-hero">
        <div className="landing-hero-content">
          <article>
            <h1 className="primary-title">GROUP CHAT THAT'S ALL FUN & GAMES</h1>
            <p className="hero-description">
              Discord is great for playing games and chilling with friends, or
              even building a worldwide community. Customize your own space to
              talk, play, and hang out.
            </p>
          </article>
          <img
            src="/image-hero.webp"
            alt="imagen de una pantalla con algunos personajes representativos de discord"
          />
        </div>
        <div className="hero-btn-group">
          <button
            onClick={() => navigate("/register")}
            className="btn btn-light"
          >
            <IoMdDownload />
            Download for Windows
          </button>

          {localStorage.getItem("formValues") && (
            <button onClick={() => navigate("/@me")} className="btn btn-dark">
              Open Discord in your browser
            </button>
          )}
        </div>
      </section>

      <VideoCards props={videos1} />
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
      <VideoCards props={videos2} />
      <section className="reviews">
        <h2 className="primary-title">Ellos ya nos eligieron</h2>
        <Reviews />
      </section>
      <section className="download">
        <div className="remove-grid">
          <div className="download-container">
            <h2 className="title-download">
              YOU CAN'T SCROLL ANIMORE. BETTER GO CHAT.
            </h2>
            <button className="btn btn-brand">
              <IoMdDownload />
              Download for Windows
            </button>
            
          </div>
          <img src="/lastBanner.webp" alt="" className="download-image" />
        </div>
      </section>

      <Footer className="found" />
    </>
  );
};
export default Landing;
