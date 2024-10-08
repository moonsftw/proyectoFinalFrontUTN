import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CardPage,
  Comunidad,
  Discover,
  InviteInvalid,
  Landing,
  Login,
  NotFound,
  Register,
  Servers,
  Verification,
} from "./Pages";

import Chat from "./Components/Chat/Chat";

function App() {
  const rutas = [
    {
      path: "/",
      name: <Landing />,
      id: 1,
    },
    {
      path: "/home",
      name: <Discover />,
      id: 2,
    },
    {
      path: "/@me",
      name: <Verification />,
      id: 3,
    },
    {
      path: "/register",
      name: <Register />,
      id: 4,
    },
    {
      path: "/login",
      name: <Login />,
      id: 5,
    },
    {
      path: "/*",
      name: <NotFound />,
      id: 6,
    },
    {
      path: "/invite",
      name: <InviteInvalid />,
      id: 7,
    },
    {
      path: "/servers",
      name: <Servers />,
      id: 8,
    },
    {
      path: "/server/:id",
      name: <Comunidad />,
      id: 9,
    },
    {
      path: "/card/:id",
      name: <CardPage />,
      id: 10,
    },
    {
      path: "/card/:id/chat",
      name: <Chat />,
      id: 11,
    },
  ];
  return (
    <Router>
      <Routes>
        {rutas.map(({ path, name, id }) => (
          <Route path={path} element={name} key={id} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
