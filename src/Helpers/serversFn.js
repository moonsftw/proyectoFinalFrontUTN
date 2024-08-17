import { useGlobalContext } from "../Context/GlobalContext";

const {setSearchTerm} = useGlobalContext();
const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
}