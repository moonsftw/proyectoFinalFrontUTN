import React from 'react'
import './MainContent.css'

import { Hero, Featured} from './../index.js'


const MainContent = () => {
  return (
    <div className='containerMain'>
        {/* Hero */}
        <Hero />
        {/* Featured Servers */}
        <Featured />
    </div>
  )
}

export default MainContent