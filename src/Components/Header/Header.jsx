import React, { useState } from "react";
import { IoMenu, IoClose } from "@/assets/icons";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import "@/index.css"
import { BiFontSize } from "react-icons/bi";

const Header = (props) => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  return (
    <header className={`${props.className} container`}>
      <Link to={"/"} className="logo">
        <img src="/modernLogo.svg" alt="" />
      </Link>
      <NavBar className={'visible'} />
      <div className="nav-items-right">
        {localStorage.getItem("formValues") ? (

          <button onClick={() => navigate("/@me")} className="btn btn-brand">
            Open Discord
          </button>
        ) : (
          <button onClick={() => navigate("/register")} className="btn btn-light">
            Registrarse
          </button>
        )}
        <span className="mobile-toggle">
          {
            !open ?
              <>

                <NavBar className={''} color={props.color}>
                  <button className="btn btn-dark"  onClick={() => { setOpen(!open) }}>
                    <IoClose style={{width: "50px", fontSize: "22px"}}/>
                  </button>
                </NavBar >
              </>
              :
                
              <button className="btn btn-light" onClick={() => { setOpen(!open) }}>
                <IoMenu  style={{width: "70px", fontSize: "20px"}}/>

              </button>

          }
        </span>
      </div>
    </header>
  );
};

export default Header;
