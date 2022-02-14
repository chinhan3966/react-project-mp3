import React from "react";

const AlbumArtist = ({ img, singer }) => {
  return (
    <div className="w-[27%] mb-6">
      <img
        className="w-full aspect-square object-cover rounded-2xl"
        src={img}
        alt="song"
      />
      <h4 className="mt-2 text-center capitalize text-[#92a0c1] text-sm font-medium line-clamp-1">
        {singer}
      </h4>
    </div>
  );
};

export default AlbumArtist;
