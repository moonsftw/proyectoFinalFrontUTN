import React from 'react'

const ArticleList = ({server}) => {
  return (
    <div>
        {server.map((card) => {
            return(
                <div className="card-container">
                    <div className="img-container">
                        <img src={card.banner} alt="" />
                    </div>
                    <div className="card-body">
                        <h2>{card.title} </h2>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ArticleList