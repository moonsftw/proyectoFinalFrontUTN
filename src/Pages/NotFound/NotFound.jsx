import React from "react";
import {
  IoChevronDownSharp,
  BsTwitterX,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTiktok,
} from "./../../assets/icons";
import "./NotFound.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const NotFound = () => {
  return (
    <>
    <Header className="main-header-not-found"/>
     
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
    <Footer className="not-found"/>
    </>
  );
};

export default NotFound;
