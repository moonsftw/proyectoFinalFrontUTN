import React from 'react'
import './Card.css'
const Card = ({size, description, title, profile, bg}) => {
  return (
    <div className='containerCard'>
        {/* Banner  */} 
        <div className="bannerCard">
            <img src={bg} alt="banner image" />
        </div>
        <div className='containerProfilePic'>
        {/* Profile Pic */}
            <div className="profilePic">  
                <img src={profile} alt="" />
            </div>
        </div>

        {/* Title */}
        <div className="containerTitle">
            <p>{title}</p>
        </div>
        {/* Description */}
        <div className="containerDescription">
            <p>{description}</p>
        </div>
        {/* Size */}
        <div className="containerSize">
            <p>{size}</p>
        </div>

    </div>
  )
}

export default Card