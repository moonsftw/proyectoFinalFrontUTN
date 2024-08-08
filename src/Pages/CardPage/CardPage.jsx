import React from 'react'
import './CardPage.css'
import {Groups, Discover} from '../../Components'
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