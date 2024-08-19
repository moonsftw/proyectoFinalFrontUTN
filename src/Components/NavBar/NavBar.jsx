import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS_NAV_BAR } from "../../Data";
import { IoMenu, IoClose } from "./../../assets/icons";
import "./NavBar.css";
const NavBar = () => {
  const itemsNav = ITEMS_NAV_BAR;
  const [open, setOpen] = useState(true)
  return (
    <>

      { open && <nav className="main-nav">
        <ul className="nav-list">
          <button onClick={() => setOpen(!open)}>cerrar</button>
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
      </nav>}
    </>
  );
};

export default NavBar;
