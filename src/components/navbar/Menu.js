import React from "react";
import { AiFillPlayCircle, AiFillHome } from "react-icons/ai";
import {
  RiSearch2Fill,
  RiCompassDiscoverFill,
  RiAccountCircleFill,
} from "react-icons/ri";
import { MdPhotoAlbum } from "react-icons/md";
import Library from "./Library";
import Playlist from "./Playlist";
const Menu = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center text-[#303e65] mt-6">
        <AiFillPlayCircle size={"30px"} />
        <h1 className="ml-2 font-semibold">Rungon</h1>
      </div>

      <div className="mt-6 ">
        <h2 className="text-[#9da9c7] uppercase pl-[25%] text-[15px] font-medium">
          Menu
        </h2>
        <div className="flex flex-col mt-4 gap-4 text-[#7c8db5] ">
          <div className="container">
            <AiFillHome size={"20px"} />
            <h3 className="ml-2 text-[14px] hover:text-[red]">Home</h3>
          </div>
          <div className="container">
            <RiSearch2Fill size={"20px"} />
            <h3 className="ml-2 text-[14px]">Seacrh</h3>
          </div>
          <div className="container">
            <RiCompassDiscoverFill size={"20px"} />
            <h3 className="ml-2 text-[14px]">Discover</h3>
          </div>
          <div className="container">
            <MdPhotoAlbum size={"20px"} />
            <h3 className="ml-2 text-[14px]">Albums</h3>
          </div>
          <div className="container">
            <RiAccountCircleFill size={"20px"} />
            <h3 className="ml-2 text-[14px]">Artists</h3>
          </div>
        </div>
      </div>
      <Library />
      <Playlist />
    </div>
  );
};

export default Menu;
