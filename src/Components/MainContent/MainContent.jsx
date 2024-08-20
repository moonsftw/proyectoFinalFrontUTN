import React from 'react'
import './MainContent.css'

import { Hero, Featured} from '@/Components'


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