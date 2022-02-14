import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import AlbumArtist from "./AlbumArtist";
import { data } from "../../../src/data";

const Artist = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h1 className="capitalize  font-semibold">top artist</h1>
        <FiMoreHorizontal size={"20px"} className="text-[#92a0c1]" />
      </div>

      <div className="flex flex-wrap justify-between mt-6 ">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <AlbumArtist img={item.img} singer={item.des} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Artist;
