import React from "react";
import { IoMenu, IoClose } from "./../../assets/icons";
import "./Header.css";
import NavBar from "../NavBar/NavBar";


const Header = (props) => {
  return (
    <header className={`${props.className} container`}>
          <NavBar /> 
    </header>
  );
};

export default Header;
