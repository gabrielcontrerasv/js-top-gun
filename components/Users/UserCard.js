import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

const userCard = ({ users }) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <div
            key={i}
            className="flex w-full justify-between items-center border-[1px] border-primary-text rounded-md bg-white overflow-hidden"
          >
            <div
              div
              className="w-[13%] h-full flex justify-center items-center border-r-[1px] border-primary-text"
            >
              <FaUserAlt className="text-primary-text text-2xl" />
            </div>
            <p className="text-xl text-primary-text ">
              <span className="font-semibold">
                {" "}
                {user.name} {user.lastName}{" "}
              </span>{" "}
              {user.document}
            </p>
            <div className="w-[13%] h-full flex justify-center items-center border-l-[1px] border-primary-text bg-dark-green cursor-pointer hover:bg-light-green">
              <IoEnterOutline className="text-white text-2xl font-semibold " />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default userCard;
