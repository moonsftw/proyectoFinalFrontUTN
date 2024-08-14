import React, { useEffect, useState } from "react";
import "./Servers.css";
import {
  DISCORD_SERVERS as servers,
  SERVER_CATEGORIES as categories,
} from "../../Data";
import { ArticleList, ButtonList, Header } from "../../Components";
/* import { CiSearch, AiFillCompass, FaGraduationCap,FiMonitor, TbAtom, GiConsoleController, BsMusicNoteBeamed } from "./../../../src/assets/icons"; */
import * as icons from "./../../../src/assets/icons";
import CardServer from "../../Components/CardServer/CardServer";
const Servers = () => {
  const allCategories = ['all', ...new Set(servers.map((server) => server.category))];

  const [newCategories , setNewCategories] = useState(allCategories);
  const [cardsServers, setCardsServers] = useState(servers);
  const [categorySeleccionada, setCategorySeleccionada] = useState({
    all: true,
    gaming: false,
    entertainment: false,
    education: false,
    music: false,
    science: false,
  });
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const filterCategory = (category) => {
    if(category === 'all'){
      setCardsServers(servers)
      return
    }
    const filteredData = servers.filter((card) => card.category === category);
    setCardsServers(filteredData)
  }

  const handleOnCheckbox = (e) => {
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
   
  };
 
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
        </div>
      </div>
      <div className="server-input">
        <input type="text" placeholder="Explore Communitities" />
        <button>
          {/* <CiSearch className="server-input-search-icon" /> */}
          <icons.search className="server-input-search-icon" />
        </button>
      </div>
      <div className="filter-servers">
        {/* <div className="servers-category">
          {categories.map((category) => {
            return (
              <div className="" key={category.id}>
                <input
                  onChange={handleOnCheckbox}
                  type="checkbox"
                  name="categories"
                  id={category.id}
                  value={category.name}
                />
                <label htmlFor={category.name}>{category.name}</label>
              </div>
            );
          })}
        </div> */}
        <ButtonList categories={newCategories} filterCategory={filterCategory}/>
        <div className="servers-match">
          {/* <ArticleList server={cardsServers} /> */}
          {
            cardsServers.map((cardServer) => <CardServer server={cardServer} key={cardServer.id}/> )
          }
          {/* { categorySeleccionada.all ?  servers.map((server) => {
            return <CardServer server={server} key={server.id}/>;
          }) : datosFiltrados.map((server) => {
            return <CardServer server={server} />;
          }) } */}
        </div>
      </div>
    </>
  );
};

export default Servers;
