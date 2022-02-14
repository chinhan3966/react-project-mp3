import React from "react";
import { BsPlayFill } from "react-icons/bs";
const Album = ({ img, title, des }) => {
  return (
    <div className="w-full shadow-md text-center p-4">
      <div className="relative">
        <img
          src={img}
          className="w-[100%] aspect-square object-cover rounded-2xl "
        />
        <div className="absolute top-[67%] left-[67%] cursor-pointer">
          <div className="bg-white hover:bg-[orange] p-1 rounded-lg transition-all">
            <BsPlayFill
              size={"20px"}
              className="text-[orange] hover:text-white transition-all"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 text-left">
        <h5 className="capitalize text-[#3f5080] font-semibold text-sm line-clamp-1">
          {title}
        </h5>
        <p className="capitalize text-[#a8b3ce] text-xs mt-1 line-clamp-1">
          {des}
        </p>
      </div>
    </div>
  );
};

export default Album;
