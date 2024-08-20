import React, { useEffect, useState } from "react";
import "./Servers.css";
import { DISCORD_SERVERS as servers } from "@/Data";
import { ArticleList, ButtonList, Header } from "@/Components";
import { motion as m } from "framer-motion";

import * as icons from "@/assets/icons";
import CardServer from "@/Components/CardServer/CardServer";
import { useGlobalContext } from "@/Context/GlobalContext";

const Servers = () => {
  /*  const {handleChangeSearchTerm, searchTerm, servers} = useGlobalContext(); */
  const [searchTerm, setSearchTerm] = useState("");

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
    /*  setCardsServers(
      servers.filter(
        (server) =>
          console.log(
            e.target.value
          ) 
      )
    ); */
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
  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm != "") {
      setCardsServers(
        cardsServers.filter((server) =>
          server.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setCardsServers(servers);
    }
  }, [searchTerm]);

  return (
    <m.main
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1 }}
    >

      <Header className="main-header" />
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
        </div>
        <div className="hero-server-img-content">
          <h1 className="title-img">find your community on discord</h1>
          <p className="text-img">
            From gaming, to music, to learning, there's a place for you
          </p>

        </div>
      </div>
      <form className="form-server">
        <div>
          <input
            type="text"
            placeholder="Explore Communities"
            name={"searchServer"}
            id={"searchServer"}
            onChange={handleChangeSearchTerm}
            value={searchTerm}
          />
        </div>
        <button>
          <icons.search className="server-input-search-icon" />
        </button>
      </form>
      <div className="filter-servers">
        <ButtonList
          className="btn-servers"
          categories={newCategories}
          filterCategory={filterCategory}
        />
        <div className="servers-match">
          <CardServer param={'server'} servers={cardsServers} />
        </div>
      </div>
    </m.main>
  );
};

export default Servers;
