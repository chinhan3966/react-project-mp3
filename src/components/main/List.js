import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet, useLocation } from "react-router";
import ListContainer from "./ListContainer";
import { HiMenuAlt1 } from "react-icons/hi";
import Song from "./Context";

const List = () => {
  const { upDateStateMenu } = useContext(Song);
  const location = useLocation();
  const { pathname } = location;
  console.log("check locate :>>", location);

  return (
    <>
      <div className="flex items-center">
        <div
          className="mr-5 cursor-pointer"
          onClick={() => upDateStateMenu(true)}
        >
          <HiMenuAlt1 size={20} />
        </div>
        <div>
          <NavLink
            activeclassname={
              pathname === "/music" || pathname === "/" ? "active" : ""
            }
            to="music"
            className={`mr-4 font-semibold text-[#92a0c1]`}
          >
            Music
          </NavLink>
          <NavLink
            activeclassname={pathname ? "active" : ""}
            to="youtube"
            className="mr-4 font-semibold text-[#92a0c1]"
          >
            Youtube
          </NavLink>

          {/* <NavLink to="radio" className="mr-4 font-semibold text-[#92a0c1]">
          Radio
        </NavLink>
        <NavLink to="live" className="mr-4 font-semibold text-[#92a0c1]">
          Live
        </NavLink> */}
        </div>
      </div>
      <Outlet />

      {/* <div>
        <ListContainer />
      </div> */}
    </>
  );
};

export default List;
