import "./App.css";
import { AiFillPlayCircle, AiFillHome } from "react-icons/ai";
import {
  RiSearch2Fill,
  RiCompassDiscoverFill,
  RiAccountCircleFill,
} from "react-icons/ri";

import { BsChevronDoubleLeft } from "react-icons/bs";
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
  const [isShowMenu, setIsShowMenu] = useState(false);
  console.log("check menu :>>", isShowMenu);
  const handlePlaySong = (id) => {
    const maxLength = dataSong.length;
    // console.log(maxLength);
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

  const upDateStateMenu = (value) => {
    setIsShowMenu(value);
  };

  return (
    <div className="App font-['Poppins']  ">
      <div
        className={`fixed top-0 left-[-70%] z-10 bg-[#fff] w-[200px] h-[100vh] shadow-2xl transition-all  ${
          isShowMenu ? "activeMenu transition-all" : ""
        }`}
      >
        <Menu />
        <div
          className="absolute top-[5px] right-[5px] cursor-pointer"
          onClick={() => upDateStateMenu(false)}
        >
          <BsChevronDoubleLeft size={17} />
        </div>
      </div>
      <Song.Provider
        value={{ dataSong, handlePlaySong, song, upDateStateMenu }}
      >
        <div className="flex flex-wrap">
          <MainLeft />
          <MainRight />
        </div>
      </Song.Provider>
    </div>
  );
}

export default App;
