import React from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { HiDocumentRemove, HiDocumentReport } from "react-icons/hi";
const Playlist = () => {
  return (
    <div className="mt-6 ">
      <h2 className="text-[#9da9c7] uppercase pl-[25%] text-[15px] font-medium">
        Playlist
      </h2>
      <div className="flex flex-col mt-4 gap-4 text-[#7c8db5] ">
        <div className="container">
          <AiFillPlusSquare size={"20px"} />
          <h3 className="ml-2 text-[14px] hover:text-[red]">Create</h3>
        </div>
        <div className="container">
          <HiDocumentRemove size={"20px"} />
          <h3 className="ml-2 text-[14px]">Favourite</h3>
        </div>
        <div className="container">
          <HiDocumentReport size={"20px"} />
          <h3 className="ml-2 text-[14px]">Local</h3>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
