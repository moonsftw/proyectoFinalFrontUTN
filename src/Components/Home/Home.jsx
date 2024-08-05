import React from "react";
import Groups from "../Groups/Groups";
import Discover from "../Discover/Discover";
import { MainContent } from "..";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      {/* Contacto + Grupos */}
      <Groups />
      {/* Discover */}
      <Discover />
      {/* Principal */}
      <MainContent />
      {/* Hero */}
      {/* Featured */}
    </div>
  );
};

export default Home;
