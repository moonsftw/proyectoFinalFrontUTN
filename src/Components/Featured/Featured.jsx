import React from "react";
import "./Featured.css";
import profilePic from "/lmfao.jpg";
import bgPic from "/background.webp";
import Card from "../Card/Card";

const Featured = () => {
  const cards = [
    {
      bg: bgPic,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size: <p>85532 Online  &#x2022; 232061 Members</p>,
      id: 1,
    },
    {
      bg: bgPic,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:<p>85532 Online  &#x2022; 232061 Members</p>,
      id: 2,
    },
    {
      bg: bgPic,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:<p>85532 Online  &#x2022; 232061 Members</p>,
      id: 3,
    },
    {
      bg: bgPic,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:<p>85532 Online  &#x2022; 232061 Members</p>,
      id: 4,
    },
    {
      bg: bgPic,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:<p>85532 Online  &#x2022; 232061 Members</p>,
      id: 5,
    },
    {
      bg: bgPic,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:<p>85532 Online  &#x2022; 232061 Members</p>,
      id: 6,
    },
  ];
  return (
    <div>
      {/* Titles */}
      <div className="titlesFeatured">
        <h3>Comunidades Destacadas</h3>
        <span>Encuentra tus comunidades favoritas</span>
      </div>
      {/* Cards */}
      <div className="containerCards">
        {cards.map(({ bg, profile, title, description, size,id }) => (
          <Card
            bg={bg}
            profile={profile}
            title={title}
            description={description}
            size={size}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
