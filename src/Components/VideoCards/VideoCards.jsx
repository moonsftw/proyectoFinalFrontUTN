import React from "react";
import "./VideoCards.css";
const VideoCards = (props) => {

  return (
    <>
      {props.props.map((videoCard) => {
        return (
          <div className="container-cards-video" key={videoCard.id}>
            <section className="cards-video">
              <div>
                <div className="video">
                  <video autoPlay loop muted playsInline data-wf-ignore="true">
                    <source src={videoCard.video} data-wf-ignore="true" />
                  </video>
                </div>
              </div>
              <div className="text-cards-video">
                <h2 className="title-cards-video">{videoCard.title}</h2>
                <p className="parrafo-cards-video">{videoCard.text}</p>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default VideoCards;
