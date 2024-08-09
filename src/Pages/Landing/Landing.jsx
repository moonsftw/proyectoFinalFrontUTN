import React from "react";
import "./Landing.css";
import { IoMdDownload } from "./../../assets/icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Landing = () => {
  return (
    <div className="container-landing">
      <section className="heroLanding">
        <Header className="main-header" />
        <div className="row container">
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
            <div className="btn btn-large btn-dark">
              Open Discord in your browser
            </div>
          </div>
        </div>
      </section>
      <div className="container-probando ">
        <section className="probando">
          <div className="probando2 order-2">
            <div className="video">
              <video autoPlay loop muted playsInline data-wf-ignore="true">
                <source
                  src="/663b271d6f05c8c9e11f8d65_Discord Refresh Sound-MP4-transcode.mp4"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
          <div className="text-probando">
            <h2 className="title-probando">MAKE YOUR GROUP CHATS MORE FUN</h2>
            <p className="parrafo-probando">
              Use custom emoji, stickers, soundboard effects and more to add
              your personality to your voice, video, or text chat. Set your
              avatar and a custom status, and write your own profile to show up
              in chat your way.
            </p>
          </div>
        </section>
      </div>
      <div className="container-probando">
        <section className="probando">
          <div className="probando2">
            <div className="video">
              <video autoPlay loop muted playsInline data-wf-ignore="true">
                <source
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F665434315cbc60da2d4c9684_Discord_Website_Refresh_Same%20Room_EN_V2-transcode.mp4"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
          <div className="text-probando">
            <h2 className="title-probando">MAKE YOUR GROUP CHATS MORE FUN</h2>
            <p className="parrafo-probando">
              Use custom emoji, stickers, soundboard effects and more to add
              your personality to your voice, video, or text chat. Set your
              avatar and a custom status, and write your own profile to show up
              in chat your way.
            </p>
          </div>
        </section>
      </div>
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
      <div className="container-probando">
        <section className="probando">
          <div className="probando2 order-2">
            <div className="video">
              <video autoPlay loop muted playsInline data-wf-ignore="true">
                <source
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.mp4"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
          <div className="text-probando">
            <h2 className="title-probando">MAKE YOUR GROUP CHATS MORE FUN</h2>
            <p className="parrafo-probando">
              Use custom emoji, stickers, soundboard effects and more to add
              your personality to your voice, video, or text chat. Set your
              avatar and a custom status, and write your own profile to show up
              in chat your way.
            </p>
          </div>
        </section>
      </div>

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
          <img src="/lastBanner.webp" alt="" />
        </div>
      </section>

      <Footer className="found" />
    </div>
  );
};
export default Landing;
