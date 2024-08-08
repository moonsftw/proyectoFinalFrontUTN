import React from 'react'
import './CardPage.css'
import Groups from '../Groups/Groups'
import Discover from '../Discover/Discover'
const CardPage = () => {
  return (
    <div className='containerCardPage'>
        <Groups />
        <Discover />
        <div className="containerPrincipalCardPage">
            Card page
        </div>
    </div>
  )
}

export default CardPage