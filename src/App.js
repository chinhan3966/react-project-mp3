import "./App.css";
import { AiFillPlayCircle, AiFillHome } from "react-icons/ai";
import {
  RiSearch2Fill,
  RiCompassDiscoverFill,
  RiAccountCircleFill,
} from "react-icons/ri";
import { MdPhotoAlbum } from "react-icons/md";
import Menu from "./components/navbar/Menu";
import Library from "./components/navbar/Library";
import MainLeft from "./components/main/MainLeft";
import MainRight from "./components/main/MainRight";
import { useState } from "react";
import { dataSong } from "../src/dataSong";
import Song from "../src/components/main/Context";

function App() {
  const [song, setSong] = useState(dataSong[0]);

  const handlePlaySong = (id) => {
    const maxLength = dataSong.length;
    console.log(maxLength);
    if (id < 0) {
      setSong(dataSong[maxLength - 1]);
      return;
    }
    if (id > maxLength - 1) {
      setSong(dataSong[0]);
      return;
    }
    const newSong = dataSong.find((item) => item.id === id);

    setSong(newSong);
  };

  return (
    <div className="App font-['Poppins']">
      <Song.Provider value={{ dataSong, song, handlePlaySong }}>
        <Menu />
        <div className="ml-[15%] flex   ">
          <MainLeft />
          <MainRight />
        </div>
      </Song.Provider>
    </div>
  );
}

export default App;
