import React from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
const Notification = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="capitalize  font-semibold">notifications</h1>
        <FiMoreHorizontal size={"20px"} className="text-[#92a0c1]" />
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div className="p-2  bg-[#f2f7ff] text-[#92a0c1] rounded-xl">
            <HiDocumentAdd size={"20px"} />
          </div>
          <div>
            <h4 className="capitalize font-semibold text-sm text-[#3f5080]">
              playlist added
            </h4>
            <h5 className="font-medium text-[#92a0c1] text-xs mt-2 capitalize">
              106 songs
            </h5>
          </div>
          <span className="font-medium text-[#92a0c1] text-xs capitalize w-[50px] self-start mt-[3px] text-right">
            2 mins
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="p-2  bg-[#f2f7ff] text-[#92a0c1] rounded-xl">
            <HiDocumentAdd size={"20px"} />
          </div>
          <div>
            <h4 className="capitalize font-semibold text-sm text-[#3f5080]">
              playlist shared
            </h4>
            <h5 className="font-medium text-[#92a0c1] text-xs mt-2 capitalize">
              to 32 users
            </h5>
          </div>
          <span className="font-medium text-[#92a0c1] text-xs capitalize w-[50px] self-start mt-[3px] text-right">
            8 hours
          </span>
        </div>
      </div>
    </>
  );
};

export default Notification;
