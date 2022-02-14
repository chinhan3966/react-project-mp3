import React from "react";
import Artist from "./Artist";
import Notification from "./Notification";
import PlaySong from "./PlaySong";
import Song from "./Context";
import { dataSong } from "../../dataSong";
import { useState } from "react";

const MainRight = () => {
  // const [song, setSong] = useState(dataSong[50]);

  // const handlePlaySong = (id) => {
  //   const newSong = dataSong.find((item) => item.id === id);
  //   setSong(newSong);
  // };

  return (
    <div className="shadow-sm grow p-8">
      <Notification />
      <Artist />
      <PlaySong />
    </div>
  );
};

export default MainRight;
