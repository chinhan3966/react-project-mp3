import React from "react";
import { IoIosTime } from "react-icons/io";
import { MdFavorite, MdLocalMall } from "react-icons/md";
const Library = () => {
  return (
    <div className="mt-6 ">
      <h2 className="text-[#9da9c7] uppercase pl-[25%] text-[15px] font-medium">
        Library
      </h2>
      <div className="flex flex-col mt-4 gap-4 text-[#7c8db5] ">
        <div className="container">
          <IoIosTime size={"20px"} />
          <h3 className="ml-2 text-[14px] hover:text-[red]">Recent</h3>
        </div>
        <div className="container">
          <MdFavorite size={"20px"} />
          <h3 className="ml-2 text-[14px]">Favourite</h3>
        </div>
        <div className="container">
          <MdLocalMall size={"20px"} />
          <h3 className="ml-2 text-[14px]">Local</h3>
        </div>
      </div>
    </div>
  );
};

export default Library;
