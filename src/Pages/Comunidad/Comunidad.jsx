import React from "react";
import "./Comunidad.css";
import { Footer, Header } from "../../Components";

const Comunidad = () => {
  return (
    <>
      <main className="comunidad-container">
        <section className="comunidad-1"></section>
        <Header className="main-header" />
        <section className="comunidad-2"></section>
        <div className="comunidad-banner">
          <img src="/servers/banners/midjourney.jpg" alt="" />
        </div>
        <Footer className="found"></Footer>
      </main>
    </>
  );
};

export default Comunidad;
