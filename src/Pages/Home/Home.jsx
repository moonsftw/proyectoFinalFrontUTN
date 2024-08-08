import React from "react";
import {Groups, Discover, MainContent} from "../../Components"

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
