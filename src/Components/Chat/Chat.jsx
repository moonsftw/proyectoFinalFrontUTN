import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Chats.css";
import { useGlobalContext } from "../../Context/GlobalContext";
import { IoMdSend } from "@/assets/icons";
const Chat = () => {
  const navigate = useNavigate();
  const parametros = useParams();
  const id = parametros.id;
  for (let index = 1; index < 21; index++) {
    if (localStorage.getItem(`chat${index}`) === null) {
      localStorage.setItem(`chat${index}`, JSON.stringify([]));
    }
  }
  const storeChats = JSON.parse(localStorage.getItem(`chat${id}`));

  const [chats, setChats] = useState(storeChats);
  const { obtenerServerId } = useGlobalContext();
  const comunidad = obtenerServerId(parametros.id);

  const handleInputChat = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const formularioValores = new FormData(formulario);

    const chat = formularioValores.get("chat");

    setChats([...chats, chat]);

    formulario.reset();
  };

  useEffect(() => {
    localStorage.setItem(`chat${id}`, JSON.stringify(chats));
  }, [chats]);

  return (
    <main className="chat-container">
      <div className="windows-chat">
        {chats.length === 0 ? (
          <h1>{`Bienvenido a ${comunidad.title}`}</h1>
        ) : (
          chats.map((chat, index) => {
            return (
              <div>
                <p key={index}>{chat}</p>
              </div>
            );
          })
        )}
      </div>
      <div className="container-chat-form">
        <form onSubmit={handleInputChat} className="form-chat">
          <div className="input-chat">
            <input
              style={{ padding: "1rem" }}
              type="text"
              name="chat"
              id="chat"
              placeholder="Comienza una conversación..."
              required
            />

            <button type="submit" className="btn-chat">
              <IoMdSend style={{ fontSize: "1.5rem", opacity:".6" }} className="btn-chat-icon-send" />
            </button>
            <button className="btn-chat-volver" onClick={() => navigate(`/home`)}>
              Volver
            </button>
          </div>
         
        </form>
      </div>
    </main>
  );
};

export default Chat;
