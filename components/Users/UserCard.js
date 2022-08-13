import React from "react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

const userCard = ({ users }) => {
  return (
    <>
      {users?.map((user) => {
        return (
          <Link key={user.id} href={`/users/${user.id}`}>
            <ul className="flex w-full justify-between items-center border-[0.5px] border-primary-text rounded-md bg-white overflow-hidden h-[3rem] duration-200 cursor-pointer hover:shadow-xl hover:font-bold">
              <div className="w-[13%] h-full flex justify-center items-center border-r-[1px] border-primary-text ">
                <FaUserAlt className="text-primary-text text-xl md:text-2xl" />
              </div>
              <p className=" md:text-xl text-primary-text text-center">
                <span className="mr-5">
                  {user.name} {user.lastName}
                </span>
                {user.document}
              </p>

              <div className="w-[13%] h-full flex justify-center items-center border-l-[1px] border-primary-text bg-dark-green cursor-pointer  duration-300 border-none">
                <IoEnterOutline className="text-white text-xl md:text-2xl font-semibold  " />
              </div>
            </ul>
          </Link>
        );
      })}
    </>
  );
};

export default userCard;
