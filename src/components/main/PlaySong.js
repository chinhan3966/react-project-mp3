import React, { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./customScroll.css";
import Song from "./Context";
import { useContext } from "react";
import { BsFillVolumeDownFill } from "react-icons/bs";
import { ImLoop } from "react-icons//im";
import { AiFillPlaySquare } from "react-icons/ai";
import { MdPauseCircle, MdLoop } from "react-icons/md";

import { BsFillPlayFill, BsPause, BsPauseFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { GrCaretNext } from "react-icons/gr";

const PlaySong = () => {
  const { song, handlePlaySong } = useContext(Song);
  const [volumeText, setVolumeText] = useState("100%");
  const handlePrev = () => {
    handlePlaySong(song.id - 1);
  };

  const handleNext = () => {
    handlePlaySong(song.id + 1);
  };

  const handleAutoPlay = () => {
    handlePlaySong(song.id + 1);
  };
  return (
    <div>
      <div className="w-full border bg-[#238e8e]  rounded-3xl px-4 py-8 text-center">
        <h1 className="capitalize text-white font-medium">now playing</h1>
        <div className="p-3 mt-4">
          <img
            className="w-full aspect-video rounded-xl object-cover"
            src={song.links.images[0].url}
          />
        </div>
        <div className="mt-5 mb-5">
          <h4 className="text-[#c3e1e1] text-sm font-semibold">{song.name}</h4>
          <h5 className="text-[#63b0b0] text-xs font-medium mt-3">
            {song.author}
          </h5>
        </div>
        <AudioPlayer
          src={song.url}
          // autoPlay={true}
          // customVolumeControls={[<BsFillVolumeDownFill />]}
          // customAdditionalControls={[<ImLoop />, <BsFillVolumeDownFill />]}
          // customVolumeControls={[<BsFillVolumeDownFill />, <div key={2}></div>]}
          customIcons={{
            play: <BsFillPlayFill />,
            pause: <BsPauseFill />,
            previous: <BiSkipPrevious />,
            next: <BiSkipNext />,
            loop: <MdLoop />,
          }}
          showSkipControls={true}
          showJumpControls={false}
          autoPlay={true}
          onEnded={handleAutoPlay}
          onClickPrevious={handlePrev}
          onClickNext={handleNext}
          customVolumeControls={[]}
          customAdditionalControls={[]}
        />
      </div>
    </div>
  );
};

export default PlaySong;
