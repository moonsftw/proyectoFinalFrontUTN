import React from "react";
import { DATA_FOOTER } from "../../Data/footer";
import { Link } from "react-router-dom";
const GroupLinks = () => {
    const footerLinks = DATA_FOOTER;
  return (
    <>
      {footerLinks.map((footerLink) => {
        return (
          <div className="footer-links-group" key={footerLink.title}>
            <h5 className="footer-title">{footerLink.title}</h5>
            {footerLink.links.map((link) => {
              return (
                <Link href="#" className="footer-link" key={link}>
                  {link}
                </Link>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default GroupLinks;
