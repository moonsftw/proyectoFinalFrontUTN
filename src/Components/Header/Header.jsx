import React, { useState } from "react";
import { IoMenu, IoClose } from "./../../assets/icons";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";


const Header = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <header className={`${props.className} container`}>
      <Link to={"/"} className="logo">
        <img src="/modernLogo.svg" alt="" />
      </Link>
     
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
          {
            open ?
            <button onClick={() => {setOpen(!open)}}>

              <IoClose className="btn-close" />
              <NavBar />
            </button>
            :
            <button onClick={() => {setOpen(!open)}}>

              <IoMenu className="btn-open" />
            </button>

          }
        </span>
      </div>
    </header>
  );
};

export default Header;
