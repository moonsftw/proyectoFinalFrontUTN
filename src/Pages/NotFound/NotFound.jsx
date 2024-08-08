import React from "react";
import {
  IoMenu,
  IoClose,
  IoChevronDownSharp,
  BsTwitterX,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTiktok,
} from "./../../assets/icons";
import "./../Landing/Landing.css";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <header className="container-landing heroLanding main-header container">
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
            <a href="#" className="btn-login">
              {/* btn btn-small btn-light  */}
              Open Discord
            </a>
            <span className="mobile-toggle">
              <IoMenu className="btn-open" />
              <IoClose className="btn-close" />
            </span>
          </div>
        </nav>
      </header>
      <section className="principal">
        <div>
          <img src="/errorGif.gif" alt="" />
        </div>
        <div className="content">
          <h1>WRONG TURN?</h1>
          <p>
            You look lost, stranger. You know what helps when you’re lost? A
            piping hot bowl of noodles. Take a seat, we’re frantically at work
            here cooking up something good. Oh, you need something to read?
            These might help you:
          </p>
          <ul>
            <li>
              <a>Status Page</a>
            </li>
            <li>
              <a>@Discord</a>
            </li>
            <li>
              <a>Discord Support</a>
            </li>
          </ul>
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
    </>
  );
};

export default NotFound;
