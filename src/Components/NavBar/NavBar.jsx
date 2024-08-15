import React from "react";
import { Link } from "react-router-dom";
import { ITEMS_NAV_BAR } from "../../Data";
import { IoMenu, IoClose } from "./../../assets/icons";
import "./NavBar.css";
const NavBar = () => {
  const itemsNav = ITEMS_NAV_BAR;
  return (
    <>
      <nav className="main-nav">
        <Link to={"/"} className="logo">
          <img src="/modernLogo.svg" alt="" />
        </Link>
        <ul className="nav-list">
          {itemsNav.map((item) => {
            return (
              <li className="nav-item" key={item.id}>
                <Link to={item.url} className={`${item.className} nav-link`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-items-right">
          <Link to={"/login"} className="btn-login">
            Open Discord
          </Link>
          <span className="mobile-toggle">
            <IoMenu className="btn-open" />
            <IoClose className="btn-close" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
