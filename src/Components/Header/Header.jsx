import React from "react";
import { IoMenu, IoClose } from "./../../assets/icons";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <header className={`${props.className} container`}>
      <Link to={"/"} className="logo">
        <img src="/modernLogo.svg" alt="" />
      </Link>
      <NavBar />
      <div className="nav-items-right">
        {localStorage.getItem("formValues") ? (
          <Link to={"/@me"} className="btn-login">
            Open Discord
          </Link>
        ) : (
          <Link to={"/register"} className="btn-login">
            Login
          </Link>
        )}
        <span className="mobile-toggle">
          <IoMenu className="btn-open" />
          <IoClose className="btn-close" />
        </span>
      </div>
    </header>
  );
};

export default Header;
