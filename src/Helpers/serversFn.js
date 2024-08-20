import { useGlobalContext } from "../Context/GlobalContext";

const {setSearchTerm} = useGlobalContext();
const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
}

export const obtenerServerId = (id) => {
    return servers.find((server) => Number(server.id) === Number(id));
  }