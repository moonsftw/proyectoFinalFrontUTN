import React, { useEffect, useState } from "react";
import "./Servers.css";
import { DISCORD_SERVERS as servers } from "@/Data";
import {  ButtonList, Header } from "@/Components";
import { motion as m } from "framer-motion";

import * as icons from "@/assets/icons";
import { CardServer } from "../../Components";



const Servers = () => {
  const { username, display } = JSON.parse(localStorage.getItem("formValues"));
  const allCategories = [
    "all",
    ...new Set(servers.map((server) => server.category)),
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const [newCategories, setNewCategories] = useState(allCategories);
  const [cardsServers, setCardsServers] = useState(servers);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      setCardsServers(
        servers.filter((server) =>
          server.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setCardsServers(servers);
    }
  }, [searchTerm, servers]);

  const filterCategory = (category) => {
    if (category === "all") {
      setCardsServers(servers);
      return;
    }
    const filteredData = servers.filter((card) => card.category === category);
    setCardsServers(filteredData);
  };

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Header className="main-header" color="#000" />
      <div className="hero-servers">
        <div className="hero-server-img">
          <img
            className="fondo-servers"
            src="/servers/main/fondoServers.svg"
            alt=""
          />
          <img
            className="izq-servers"
            src="/servers/main/leftServers.svg"
            alt=""
          />
          <img
            className="dcha-servers"
            src="/servers/main/rightServers.svg"
            alt=""
          />
          <h1 className="title-img">Find your community on discord</h1>
          <p className="text-img">
            From gaming, to music, to learning, there's a place for you
          </p>
        </div>

        <div className="hero-server-input">
          <form className="form-server">
            <div>
              <input
                type="text"
                placeholder="Explore Communities"
                name={"searchServer"}
                id={"searchServer"}
                onChange={handleChangeSearchTerm}
                value={searchTerm}
                required
              />
            </div>
            <button type="submit">
              <icons.search className="server-input-search-icon" />
            </button>
          </form>
        </div>
      </div>
      <div className="filter-servers">
        <ButtonList
          className="btn-servers"
          categories={newCategories}
          filterCategory={filterCategory}
        />
        <div className="servers-match">
          <CardServer param={"server"} servers={cardsServers} />
        </div>
      </div>
    </m.main>
  );
};

export default Servers;
