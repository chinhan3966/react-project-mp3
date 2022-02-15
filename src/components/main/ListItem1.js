import React, { useContext } from "react";
import Album from "./Album";
import Song from "../main/Context";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import "./styles.css";

const ListItem1 = ({ title, data }) => {
  const { handlePlaySong, song, dataSong } = useContext(Song);
  return (
    <div className="w-full shadow-md mt-6 pb-6 ">
      <div className="flex justify-between p-6 ">
        <h4 className="text-[#465785] font-semibold">{title}</h4>
        <h5 className="text-[#92a0c1] font-[500]">See all</h5>
      </div>
      <div className="flex justify-evenly ">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={25}
        >
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => handlePlaySong(item.id)}
                >
                  {/* {console.log("check data", data)} */}
                  <Album
                    title={item.title || item.name}
                    des={item.author || item.des}
                    img={item.img || item.links.images[0].url}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListItem1;
