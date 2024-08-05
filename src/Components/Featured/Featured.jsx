import React from "react";
import "./Featured.css";
import profilePic from "/lmfao.jpg";

import bg02 from '/bg02.jpg';
import bg03 from '/bg03.jpg';
import bg04 from '/bg04.jpg';
import Card from "../Card/Card";


const Featured = () => {
  const cards = [
    {
      bg: bg02,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size: "<p>85532 Online  -; 232061 Members",
      id: 1,
    },
    {
      bg: bg03,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 2,
    },
    {
      bg: bg04,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 3,
    },
    {
      bg: bg03,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 4,
    },
    {
      bg: bg04,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 5,
    },
    {
      bg: bg02,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 6,
    },
    {
      bg: bg02,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 7,
    },
    {
      bg: bg02,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online  -; 232061 Members",
      id: 8,
    },
    {
      bg: bg02,
      profile: profilePic,
      title: "Fire Emblem Heroes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores",
      size:"85532 Online ; 232061 Members",
      id: 9,
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
