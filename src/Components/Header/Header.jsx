import React, { useState } from "react";
import { IoMenu, IoClose } from "@/assets/icons";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";


const Header = (props) => {
  const [open, setOpen] = useState(true)

  return (
    <header className={`${props.className} container`}>
      <Link to={"/"} className="logo">
        <img src="/modernLogo.svg" alt="" />
      </Link>
      <NavBar className={'visible'} />
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
            !open ?
              <>

                <NavBar className={''}>
                  <button onClick={() => { setOpen(!open) }}>
                    <IoClose className="btn-close" />
                  </button>
                </NavBar >
              </>
              :
                
              <button onClick={() => { setOpen(!open) }}>
                <IoMenu className="btn-open" />

              </button>

          }
        </span>
      </div>
    </header>
  );
};

export default Header;
