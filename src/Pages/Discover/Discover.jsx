import React, { useEffect, useState } from "react";
import "./Discover.css";
import "@/index.css"
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
    <main className="discover">
      <section className="discover-contacts">
        <Groups />
      </section>

      <section className="discover-comunidad">
        <div className="discover-comunidad-img">
          <h1>Encuentra tu comunidad</h1>
          <img src="/iconCube.webp" alt="" />
        </div>
        <div className="discover-container-cards">
          <ButtonList categories={newCategories} filterCategory={filterCategory} />
          <CardServer param={"card"} servers={cardsServers} />
        </div>
      </section>
    </main>
  );
};

export default Discover;
