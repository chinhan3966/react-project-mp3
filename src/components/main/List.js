import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import ListContainer from "./ListContainer";

const List = () => {
  return (
    <>
      <div>
        <NavLink
          activeclassname="active"
          to="music"
          className="mr-4 font-semibold text-[#92a0c1]"
        >
          Music
        </NavLink>
        <NavLink to="youtube" className="mr-4 font-semibold text-[#92a0c1]">
          Youtube
        </NavLink>

        {/* <NavLink to="radio" className="mr-4 font-semibold text-[#92a0c1]">
          Radio
        </NavLink>
        <NavLink to="live" className="mr-4 font-semibold text-[#92a0c1]">
          Live
        </NavLink> */}
      </div>
      <Outlet />

      {/* <div>
        <ListContainer />
      </div> */}
    </>
  );
};

export default List;
