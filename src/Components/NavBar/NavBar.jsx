import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS_NAV_BAR } from "../../Data";
import { IoMenu, IoClose } from "./../../assets/icons";
import "./NavBar.css";
import "@/index.css"
const NavBar = ({children, className, color}) => {
  const itemsNav = ITEMS_NAV_BAR;
  const [open, setOpen] = useState(true)
  const [btnCerrar, setBtnCerrar] = useState(false)
  return (
    <>

      { open && <nav className={`main-nav ${className}`}>
        {children}
        <ul className="nav-list">
              {btnCerrar &&
                <button onClick={() => setOpen(false)}><IoClose /></button>
               }
          {itemsNav.map((item) => {
            return (
              <li className="nav-item" key={item.id}>
                <Link style={{color: color}} to={item.url} className={`${item.className} nav-link`}>
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
