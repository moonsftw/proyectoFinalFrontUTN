import { createContext, useContext, useEffect, useState } from "react";
import { handleCreateUsuario } from "./../Helpers/form";
import { DISCORD_SERVERS as servers } from "./../Data";

/* import {handleChangeSearchTerm} from './../Helpers/serversFn' */

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cardsServers, setCardsServers] = useState(servers);
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  
  const handleRegistered = () => {

  }
  const handleLogged = () => {

  }

  const obtenerServerId = (id) => {
    return servers.find((server) => Number(server.id) === Number(id));
  }
  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if(searchTerm != ""){
        setCardsServers(cardsServers.filter(server => server.title.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
        setCardsServers(servers);
    }
  }, [searchTerm]);
  return (
    <GlobalContext.Provider
      value={{
        handleCreateUsuario,
        handleChangeSearchTerm,
        searchTerm,
        servers,
        obtenerServerId
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
