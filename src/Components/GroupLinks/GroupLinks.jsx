import React from "react";
import { DATA_FOOTER } from "../../Data/footer";
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
                <a href="#" className="footer-link" key={link}>
                  {link}
                </a>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default GroupLinks;
