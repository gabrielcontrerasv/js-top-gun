import React from "react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

const userCard = ({ users }) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <ul
            key={i}
            className="flex w-full justify-between items-center border-[1px] border-primary-text rounded-md bg-white overflow-hidden h-[3rem] hover:border-2 duration-300 cursor-pointer"
          >
            <div
              div
              className="w-[13%] h-full flex justify-center items-center border-r-[1px] border-primary-text"
            >
              <FaUserAlt className="text-primary-text text-xl md:text-2xl" />
            </div>
            <p className=" md:text-xl text-primary-text text-center">
              <span className="font-semibold mr-5">
                {user.name} {user.lastName}
              </span>
              {user.document}
            </p>
            <Link href={`/users/${user.id}`}>
              <div className="w-[13%] h-full flex justify-center items-center border-l-[1px] border-primary-text bg-dark-green cursor-pointer hover:bg-light-green duration-300 border-none">
                <IoEnterOutline className="text-white text-xl md:text-2xl font-semibold  " />
              </div>
            </Link>
          </ul>
        );
      })}
    </>
  );
};

export default userCard;
