import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import moment from "moment";
import useGetData from "../../custom/fetch";
import "./Youtube.css";

const Youtube = () => {
  const navigation = useNavigate();
  // const [show, setShow] = useState(true);
  const [query, setQuery] = useState("");
  const [dataVideo, setDataVideo] = useState([]);
  const [isCall, setIsCall] = useState(false);
  // console.log("state", dataVideo);
  // const [dataCopy, setDataCopy] = useState([]);
  // const { data } = useGetData(
  //   "https://www.googleapis.com/youtube/v3/search",
  //   query
  // );
  // useEffect(() => {
  //   const filterDataVideo = dataVideo.filter((video, index) => {
  //     return dataVideo.find((item) => item.etag === video.etag);
  //   });
  //   console.log("filter", filterDataVideo);
  // }, [dataVideo]);
  const handleSearch = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "5",
        key: "AIzaSyAwZKOK8Pxi9K-NiawgeQ-cn3shAGR0XQI",
        q: query,
      },
    });
    if (res && res.data && res.data.items) {
      // console.log(res);
      setDataVideo(res.data.items);
      setIsCall(true);
    }
  };

  const handleAddVideo = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "10",
        key: "AIzaSyAwZKOK8Pxi9K-NiawgeQ-cn3shAGR0XQI",
        q: query,
      },
    });
    if (res && res.data && res.data.items) {
      // console.log("add data", res.data.items);
      const data = res.data.items.slice(5, 9);
      const newArr = [...dataVideo, ...data];
      setDataVideo(newArr);
      setIsCall(true);
    }
  };
  return (
    <div className="mt-3 font-poppins">
      {/**Search */}
      {console.log("check dataa", dataVideo)}

      <div className="text-center flex items-center justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border border-[#ddd] outline-none px-3 py-2 min-w-[70%] shadow-sm   focus:ring-1 focus:ring-[#a9a8a8]"
        />
        <button
          className="group relative border border-[#ddd] border-l-0 px-6 py-2  cursor-pointer shadow-sm bg-[#fbf8f8] hover:bg-[#f3f3f3] transition-all]"
          onClick={handleSearch}
        >
          <AiOutlineSearch size={"24px"} />
          <span className="absolute top-[145%] left-0 w-full block whitespace-nowrap bg-[rgba(0,0,0,0.5)] px-1 py-[5px] fill] text-sm opacity-0 group-hover:opacity-100 transition-all">
            Tim kiem
          </span>
        </button>
      </div>

      {/**Result */}
      <div className={`mt-10 `}>
        {dataVideo &&
          dataVideo.length > 0 &&
          dataVideo.map((item, index) => (
            <div className="mt-5 flex " key={index}>
              {/**left */}
              <div className="left w-[45%] ">
                <iframe
                  className="p-1 aspect-video w-full "
                  src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/**right */}
              <div className="right w-[55%] p-2">
                {/**title */}
                <div>
                  <h1 className="font-medium line-clamp-2 capitalize ">
                    {item.snippet.title}
                  </h1>
                </div>
                {/**create at */}
                <div>
                  <span className="text-sm text-[#606060] font-normal">
                    {moment(item.snippet.publishTime).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </span>
                </div>
                {/**author */}
                <div className="flex items-center mt-2">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={item.snippet.thumbnails.high.url}
                  />
                  <h6 className="text-sm text-[#606060] ml-3">
                    {item.snippet.channelTitle}
                  </h6>
                </div>
                {/**description */}
                <div>
                  <p className="text-sm line-clamp-1 mt-3">
                    {item.snippet.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isCall === true && (
        <div className="mt-4 text-center">
          <button className="px-8 py-2 bg-[#606060]" onClick={handleAddVideo}>
            Xem them
          </button>
        </div>
      )}
    </div>
  );
};

export default Youtube;
