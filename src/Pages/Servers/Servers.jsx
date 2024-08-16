import React, { useEffect, useState } from "react";
import "./Servers.css";
import { DISCORD_SERVERS as servers } from "../../Data";
import { ArticleList, ButtonList, Header } from "../../Components";

import * as icons from "./../../../src/assets/icons";
import CardServer from "../../Components/CardServer/CardServer";
const Servers = () => {
  const allCategories = [
    "all",
    ...new Set(servers.map((server) => server.category)),
  ];

  const [newCategories, setNewCategories] = useState(allCategories);
  const [cardsServers, setCardsServers] = useState(servers);
  const [categorySeleccionada, setCategorySeleccionada] = useState({
    all: true,
    gaming: false,
    entertainment: false,
    education: false,
    music: false,
    science: false,
  });
  /*  const [datosFiltrados, setDatosFiltrados] = useState([]); */

  const filterCategory = (category) => {
    if (category === "all") {
      setCardsServers(servers);
      return;
    }
    const filteredData = servers.filter((card) => card.category === category);
    setCardsServers(filteredData);
  };
  const handleInputServers = (e) => {
    e.preventDefault();
    setCardsServers(
      servers.filter(
        (server) =>
          console.log(
            e.target.value
          ) /* server.title.includes(e.target.value) */
      )
    );
  };

  /*   const handleOnCheckbox = (e) => {
    setCategorySeleccionada({
      ...categorySeleccionada,
      [e.target.value]: e.target.checked,
      all: false,
    });
    if (e.target.checked) {
      const resultadoCategory = servers.filter((server) => {
        return server.category === e.target.value;
      });
      setDatosFiltrados([...datosFiltrados, ...resultadoCategory]);
    } else {
      const resultadoCategory = datosFiltrados.filter((server) => {
        return server.category !== e.target.value;
      });
      setDatosFiltrados([...resultadoCategory]);
    }
  }; */

  return (
    <>
      <div className="hero-servers">
        <Header className="main-header" />
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
        </div>
        <div className="hero-server-img-content">
          <h1 className="title-img">find your community on discord</h1>
          <p className="text-img">
            From gaming, to music, to learning, there's a place for you
          </p>
          <form>
            <div>
              <input
                type="text"
                placeholder="Explore Communities"
                name={"searchServer"}
                id={"searchServer"}
              />
            </div>
            <button>
              <icons.search className="server-input-search-icon" />
            </button>
          </form>
        </div>
      </div>
      <div className="filter-servers">
        <ButtonList
          categories={newCategories}
          filterCategory={filterCategory}
        />
        <div className="servers-match">
          <CardServer servers={cardsServers} />
        </div>
      </div>
    </>
  );
};

export default Servers;
