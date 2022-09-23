import React from "react";
import Artist from "./Artist";
import Notification from "./Notification";
import PlaySong from "./PlaySong";
import Song from "./Context";
import { dataSong } from "../../dataSong";
import { useState } from "react";
import { useLocation } from "react-router";

const MainRight = () => {
  // const [song, setSong] = useState(dataSong[50]);

  // const handlePlaySong = (id) => {
  //   const newSong = dataSong.find((item) => item.id === id);
  //   setSong(newSong);
  // };

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="lg:w-[30%] w-full shadow-sm md:p-8 p-4">
      {pathname === "/music" && <Notification />}
      {pathname === "/music" && <Artist />}
      {pathname === "/music" && <PlaySong />}
    </div>
  );
};

export default MainRight;
