import React, { useEffect, useState } from "react";
import "./Discover.css";

import * as icons from "@/assets/icons";
import { ButtonList, CardServer, Groups } from "@/Components";
import { DISCORD_SERVERS as servers } from "@/Data";

const Discover = () => {
  const { username, display } = JSON.parse(localStorage.getItem("formValues"));
  const allCategories = [
    "all",
    ...new Set(servers.map((server) => server.category)),
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const [newCategories, setNewCategories] = useState(allCategories);
  const [cardsServers, setCardsServers] = useState(servers);

  const filterCategory = (category) => {
    if (category === "all") {
      setCardsServers(servers);
      return;
    }
    const filteredData = servers.filter((card) => card.category === category);
    setCardsServers(filteredData);
  };
  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
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
    <main className="discover">
      <section className="discover-contacts">
        <Groups />
      </section>

      <section className="discover-comunidad">
        <div className="discover-comunidad-img">
          <img src="/servers/main/fondoServers.svg" alt="" />
          <form className="form-server">
            <div>
              <input
                type="text"
                placeholder="Find your Community"
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
        </div>
        <ButtonList
          className="btn-servers"
          categories={newCategories}
          filterCategory={filterCategory}
        />
        <div className="discover-container-cards">
          <CardServer param={"card"} servers={cardsServers} />
        </div>
      </section>
    </main>
  );
};

export default Discover;
