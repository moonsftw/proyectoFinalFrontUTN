import React from "react";
import "./Landing.css";
import { IoMdDownload } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

export const Landing = () => {
  return (
    <div className="container-landing">
      <section className="heroLanding">
        <header className="main-header container">
          <nav className="main-nav">
            <a href="#" className="logo">
              <img src="/logo.svg" alt="" />
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
              <a href="#" className="btn btn-small btn-light btn-login">
                Login
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
            <h1 className="title primary-title">Your place to talk</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              odit, exercitationem vero optio eligendi magni maiores corrupti
              assumenda nemo voluptas, molestiae autem laborum eos officia
              aspernatur consequuntur quia ipsa incidunt.
            </p>
            <div className="hero-btn-group">
              <div className="btn btn-large btn-light">
                <IoMdDownload className="btn-download" />
                Download for Windows
              </div>
              <div className="btn btn-large btn-dark">
                Open Discord in your browser
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collaboration">
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

      <section className="voice-channel">
      <div className="row container">
          <img src="/section-2.svg" alt="" className="grid-image order-2" />
          <div className="text-group order-1">
            <h2 className="title secondary-title">
              Where handing out is easy
            </h2>
            <p className="text-group-description">
              Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.
            </p>
          </div>
        </div>
      </section>
      <svg
        class="wave"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          class="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};
