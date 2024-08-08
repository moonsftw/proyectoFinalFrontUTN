import React from "react";
import "./Landing.css"
import {IoMdDownload, IoMenu,IoClose, IoChevronDownSharp, BsTwitterX, FaInstagram, FaYoutube, FaTiktok, FaFacebookSquare} from './../../assets/icons';

 const Landing = () => {
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
      <div className="wrapper">
        <div className="item item1 ">TALK</div>
        <div className="item item2 "><img src="/discordAnimate.webp" alt="" /></div>
        <div className="item item3 ">PLAY</div>
        <div className="item item4 "><img src="/discordAnimate.webp" alt="" /></div>
        <div className="item item5 ">CHAT</div>
        <div className="item item6 "><img src="/discordAnimate.webp" alt="" /></div>
        <div className="item item7 ">LISTEN</div>
        <div className="item item8 "><img src="/discordAnimate.webp" alt="" /></div>
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
          {/*  <img src="/sparkles.svg" alt="" className="sparkles" />
          <h2>Ready to start your journey?</h2>
          <a href="#" className="btn btn-large btn-brand">
            <IoMdDownload className="btn-download" />
            Download for Windows
          </a> */}
          <div className="download-container">

          <h2 className="title-download">YOU CAN'T SCROLL ANIMORE. BETTER GO CHAT.</h2>
          <a href="#" className="btn btn-large btn-brand">
            <IoMdDownload className="btn-download" />
            Download for Windows
          </a>
          </div>
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
            <img src="/modernLogo.svg" alt="" />
          </a>
          <a href="#" className="btn btn-small btn-brand">
            Login
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Landing;