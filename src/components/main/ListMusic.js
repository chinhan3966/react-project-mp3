import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { dataSong } from "../../../src/dataSong";
import "./customScroll.css";
import Song from "./Context";
import { useContext, useState } from "react";

const ListMusic = () => {
  const { song, handlePlaySong } = useContext(Song);
  const [active, setActive] = useState(false);
  const handleClick = (id) => {
    // console.log("check id:>>", id);
    handlePlaySong(id);
  };

  return (
    <div className="w-full shadow-md mt-6  ">
      <div className="flex justify-between p-6 ">
        <h4 className="text-[#465785] font-semibold capitalize">
          recently played
        </h4>
        <h5 className="text-[#92a0c1] font-[500] capitalize">See all</h5>
      </div>
      <div className="h-96 overflow-y-scroll" id="scroll-hidden">
        {/* listMusic */}
        {/* {console.log(dataSong)} */}
        {dataSong &&
          dataSong.length > 0 &&
          dataSong.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex justify-between items-center px-6 mb-6 hover:bg-slate-200 cursor-pointer ${
                  song.id === item.id ? "bg-[#238e8e]" : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                <div className="flex items-center">
                  <span className="text-[#92a0c1] font-semibold mr-5 w-5">
                    {index < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <img
                    className="w-12 h-12 object-cover mr-5 rounded-xl"
                    src={item.links.images[0].url}
                    alt="song"
                  />
                  <div className="mr-5">
                    <h3 className="text-[#465785] font-semibold text-sm">
                      {item.name}
                    </h3>
                    <h4 className="text-[#92a0c1] font-[500 text-xs mt-1">
                      {item.author}
                    </h4>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 bg-white hover:bg-[orange] p-1 rounded-lg transition-all border border-[#ddd] cursor-pointer">
                    <BsPlayFill
                      size={"20px"}
                      className="text-[orange] hover:text-white transition-all"
                    />
                  </div>
                  <div className="bg-white hover:bg-[orange] p-1 rounded-lg transition-all border border-[#ddd] cursor-pointer">
                    <MdAddBox
                      size={"20px"}
                      className="text-[orange] hover:text-white transition-all"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListMusic;
