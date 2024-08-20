import React from 'react'
import './CardPage.css'

import { useGlobalContext } from '@/Context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';
const CardPage = () => {
  const parametros = useParams();
  const { obtenerServerId } = useGlobalContext();
  const chat = obtenerServerId(parametros.id)
  const navigate = useNavigate();
 console.log(chat)
  return (
    <main className="card-page-container">
      <section className="chat">
        <h1>{`¿Quieres unirte a: ${chat.title}?`}</h1>
        <button onClick={() => navigate(`/card/${chat.id}/chat`)}>Unirme</button>
        <button>Cancelar</button>
      </section>
      <section><form action=""><input type="text" /></form></section>
    </main>
  )
}

export default CardPage