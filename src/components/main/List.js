import React from "react";
import { Link } from "react-router-dom";
import ListContainer from "./ListContainer";

const List = () => {
  return (
    <>
      <div>
        <Link to="music" className="mr-4 font-semibold">
          Music
        </Link>
        <Link to="postcast" className="mr-4 font-semibold text-[#92a0c1]">
          Postcast
        </Link>
        <Link to="live" className="mr-4 font-semibold text-[#92a0c1]">
          Live
        </Link>
        <Link to="radio" className="mr-4 font-semibold text-[#92a0c1]">
          Radio
        </Link>
      </div>
      <div>
        <ListContainer />
      </div>
    </>
  );
};

export default List;
