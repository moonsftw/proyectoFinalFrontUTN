import React from "react";
import "./Landing.css";
import { IoMdDownload } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="container-landing">
      <section className="heroLanding">
        <header className="main-header container">
          <nav className="main-nav">
            <a href="#" className="logo">
              <img src="/modernLogo.svg" alt="" />
            </a>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Why Discord
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Nitro
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Safety
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Support
                </a>
              </li>
            </ul>
            <div className="nav-items-right">
              <a href="#" className="btn-login">{/* btn btn-small btn-light  */}
                Open Discord
              </a>
              <span className="mobile-toggle">
                <IoMenu className="btn-open" />
                <IoClose className="btn-close" />
              </span>
            </div>
          </nav>
        </header>
        <div className="row container">
          <div className="hero-content-wrap">
            <div className="heroContainer">
              {/* <div className="containerPrimaryTitle"> */}
                <h1 className="title primary-title">
                  GROUP CHAT THAT'S ALL FUN & GAMES
                </h1>
              {/* </div> */}
              {/* <div className="containerHeroDescription"> */}
                <p className="hero-description">
                  Discord is great for playing games and chilling with friends,
                  or even building a worldwide community. Customize your own
                  space to talk, play, and hang out.
                </p>
             {/*  </div> */}
            </div>
            <div className="hero-image">
              <img src="664daa37ea162cadf9603500_Art.webp" alt="" />
            </div>
          </div>
          <div className="hero-btn-group">
            <div className="containerBtnDownload"> {/* btn btn-large btn-light */}
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

      {/*  <section className="collaboration">
        <div className="row container">
          <img src="/section-1.svg" alt="" className="grid-image" />
          <div className="text-group">
            <h2 className="title secondary-title">
              An invite-only place with plenty of room to talk
            </h2>
            <p>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just tralk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </section>
      <svg
        className="wave"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>
      <section className="voice-channel">
        <div className="row container">
          <img src="/section-2.svg" alt="" className="grid-image order-2" />
          <div className="text-group order-1">
            <h2 className="title secondary-title">Where handing out is easy</h2>
            <p className="text-group-description">
              Grab a seat in a voice channel when you're free. Friends in your
              server can see you're around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
      </section>
      <svg
        className="wave wave-inverted"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>
      <section className="moderation-tools">
        <div className="row container">
          <img src="/section-3.svg" alt="" className="grid-image order-2" />
          <div className="text-group order-1">
            <h2 className="title secondary-title">From a few to a fandoom</h2>
            <p className="text-group-description">
              Get a community of any size running with moderation tools and
              custom member access. Give members special powers, set up private
              channels, and more.
            </p>
          </div>
        </div>
      </section>
      <svg
        className="wave "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>
      <section className="video-call">
        <div className="row container">
          <div className="text-group">
            <h2 className="title secondary-title">
              Reliable tech for staying close
            </h2>
            <p className="text-group-description">
              Low-latency voice and video feels like you're in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img src="/section-4.svg" alt="" className="grid-image" />
        </div>
      </section> */}
      <section className="download">
        <div className="row container remove-grid">
          {/*  <img src="/sparkles.svg" alt="" className="sparkles" />
          <h2>Ready to start your journey?</h2>
          <a href="#" className="btn btn-large btn-brand">
            <IoMdDownload className="btn-download" />
            Download for Windows
          </a> */}
          <h2>YOU CAN'T SCROLL ANIMORE. BETTER GO CHAT</h2>
          <a href="#" className="btn btn-large btn-brand">
            <IoMdDownload className="btn-download" />
            Download for Windows
          </a>
          <img src="/lastBanner.webp" alt="" />
        </div>
      </section>
      <footer className="main-footer">
        <div className="row container">
          <div className="info-box">
            <div className="languages">
              <img src="/flag.png" alt="" />
              <span>English</span>
              <IoChevronDownSharp />
            </div>
            <div className="social-media">
              <a href="#" className="sm-link">
                <BsTwitterX />
              </a>
              <a href="#" className="sm-link">
                <FaInstagram />
              </a>
              <a href="#" className="sm-link">
                <FaFacebookSquare />
              </a>
              <a href="#" className="sm-link">
                <FaYoutube />
              </a>
              <a href="#" className="sm-link">
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="footer-links-group">
            <h5 className="footer-title">Product</h5>
            <a href="#" className="footer-link">
              Download
            </a>
            <a href="#" className="footer-link">
              Nitro
            </a>
            <a href="#" className="footer-link">
              Status
            </a>
            <a href="#" className="footer-link">
              App Directory
            </a>
            <a href="#" className="footer-link">
              New Mobile Experience
            </a>
          </div>
          <div className="footer-links-group">
            <h5 className="footer-title">Company</h5>
            <a href="#" className="footer-link">
              About
            </a>
            <a href="#" className="footer-link">
              Jobs
            </a>
            <a href="#" className="footer-link">
              Brand
            </a>
            <a href="#" className="footer-link">
              Newsroom
            </a>
          </div>

          <div className="footer-links-group">
            <h5 className="footer-title">Resources</h5>
            <a href="#" className="footer-link">
              College
            </a>
            <a href="#" className="footer-link">
              Support
            </a>
            <a href="#" className="footer-link">
              Safety
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              Feedback
            </a>
            <a href="#" className="footer-link">
              StreamKit
            </a>
            <a href="#" className="footer-link">
              Creators
            </a>
            <a href="#" className="footer-link">
              Community
            </a>
            <a href="#" className="footer-link">
              Developers
            </a>
            <a href="#" className="footer-link">
              Gaming
            </a>
            <a href="#" className="footer-link">
              Quests
            </a>
            <a href="#" className="footer-link">
              Official 3rd Party Merch
            </a>
          </div>
          <div className="footer-links-group">
            <h5 className="footer-title">Policies</h5>
            <a href="#" className="footer-link">
              Terms
            </a>
            <a href="#" className="footer-link">
              Privacy
            </a>
            <a href="#" className="footer-link">
              Cookie Settings
            </a>
            <a href="#" className="footer-link">
              Guideliness
            </a>
            <a href="#" className="footer-link">
              Acknowledgements
            </a>
            <a href="#" className="footer-link">
              Licenses
            </a>
            <a href="#" className="footer-link">
              Company Information
            </a>
          </div>
          <div className="divider"></div>
        </div>
        <div className="row container remove-grid">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="" />
          </a>
          <a href="#" className="btn btn-small btn-brand">
            Login
          </a>
        </div>
      </footer>
    </div>
  );
};
