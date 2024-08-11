import React from "react";
import {
  IoChevronDownSharp,
  BsTwitterX,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebookSquare,
} from "./../../assets/icons";
import "./Footer.css";
import GroupLinks from "../GroupLinks/GroupLinks";

const Footer = (props) => {
  return (
    <footer className={`main-footer ${props.className}`}>
      <div className="container-footer">
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
        <GroupLinks />
        <div className="divider"></div>
      </div>
      <div className="remove-grid">
        <img src="/modernLogo.svg" alt="" className="logo" />
        <button className="btn-brand">Open Discord</button>
      </div>
    </footer>
  );
};

export default Footer;
