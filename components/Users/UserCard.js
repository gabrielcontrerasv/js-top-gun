import React from "react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

const userCard = ({ users }) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <div
            key={i}
            className="flex w-full justify-between items-center border-[1px] border-primary-text rounded-md bg-white overflow-hidden h-[3rem]"
          >
            <div
              div
              className="w-[13%] h-full flex justify-center items-center border-r-[1px] border-primary-text"
            >
              <FaUserAlt className="text-primary-text text-xl md:text-2xl" />
            </div>
            <p className=" md:text-xl text-primary-text text-center">
              <span className="font-semibold">
                {" "}
                {user.name} {user.lastName}{" "}
              </span>{" "}
              {user.document}
            </p>
            <Link href={`/users/${user.id}`}>
              <div className="w-[13%] h-full flex justify-center items-center border-l-[1px] border-primary-text bg-dark-green cursor-pointer hover:bg-light-green">
                <IoEnterOutline className="text-white text-xl md:text-2xl font-semibold " />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default userCard;
