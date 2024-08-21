import React from "react";
import "./CardPage.css";

import { useGlobalContext } from "@/Context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
const CardPage = () => {
  const parametros = useParams();
  const { obtenerServerId } = useGlobalContext();
  const chat = obtenerServerId(parametros.id);
  const navigate = useNavigate();
  console.log(chat);
  return (
    <main className="card-page-container">
      <section className="chat">
        <div className="chat-title">
          <h1>
            ¿Quieres unirte a:{" "}
            <span style={{ color: chat.color }}>{chat.title}</span>?
          </h1>
        </div>
        <div className="chat-buttons">
          <button onClick={() => navigate(`/card/${chat.id}/chat`)}>
            Unirme
          </button>
          <button onClick={() => navigate(`/home`)}>Volver</button>
        </div>
      </section>
    </main>
  );
};

export default CardPage;
