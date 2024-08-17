import React from "react";
import "./Discover.css";
import lmfao from "/lmfao.jpg";
import { AiFillCompass } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";
import {
  BsMusicNoteBeamed,
  BsFillPlayCircleFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { TbAtom } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { MdKeyboardVoice } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Topic from "../Topic/Topic";

const Discover = () => {
  const topics = [
    {
      title: "Home",
      icon: <AiFillCompass />,
    },
    {
      title: "Gaming",
      icon: <GiConsoleController />,
    },
    {
      title: "Music",
      icon: <BsMusicNoteBeamed />,
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
    },
    {
      title: "Science & Tech",
      icon: <TbAtom />,
    },
    {
      title: "Content Creator",
      icon: <BsFillPlayCircleFill />,
    },
    {
      title: "Anime & Manga",
      icon: <BsFillEmojiSmileFill />,
    },
    {
      title: "Movies & TV",
      icon: <FiMonitor />,
    },
  ];
  const {username, display} = JSON.parse(localStorage.getItem("formValues"));
 
  

  return (
    <div className="containerDiscover">
      <div>
        {/* Title */}

        <p className="titleDiscover">Discover</p>

        {/* Topics */}

        <div className="topics">
          {topics.map((topic) => {
            return <Topic title={topic.title} icon={topic.icon} />;
          })}
        </div>
      </div>
      {/* ProfileSettings */}
      <div className="containerProfileSett">
        <div className="containerImgProfile">
          <img src={lmfao} alt="" />
          <div>
            <p className="profileName">{display}</p>
          </div>
            <p className="profileId">#{username}</p>
        </div>
        <div className="iconsProfileSett">
          <section>
            <MdKeyboardVoice />
          </section>
          <section>
            <FaHeadphones />
          </section>
          <section>
            <IoSettingsSharp />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Discover;
