import React from "react";
import Image from "next/image";
import UserPicture from "../../public/assets/images/Grumpy404.png";
import ProfileUserData from "./ProfileUserData";

const Userprofile = () => {
  return (
    <main className="col-start-2 col-end-8 row-star1 row-span-2 grid grid-cols-3">
      {/* User Section */}
      <section className="col-start-1 col-end-3 p-8">
        <div className="border-2 border-dark-green w-[90%] h-full rounded-md flex flex-col items-center">
          <div className="w-full h-[35%] flex justify-center items-center">
            <div className="border-b-2 border-dark-green w-[80%] h-full flex p-5">
              {/* User Image */}
              <div className="border-2 border-dark-green w-[40%] relative rounded-full overflow-hidden h-[85%] my-auto">
                <Image
                  src={UserPicture}
                  alt="user picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* User Header */}
              <div className="w-[75%] h-full flex flex-col justify-center pl-5">
                <h1 className="text-4xl font-bold mb-4">Nicolas Peña</h1>
                <h3 className="text-xl font-semibold mb-2">Admin</h3>
                <h3 className="text-xl font-semibold">Envigado, Antioquia</h3>
              </div>
            </div>
          </div>
          {/* User Data */}
          <div className="w-[80%] text-xl flex flex-col">
            <ProfileUserData data1="Document" data2="1110531223" />
            <ProfileUserData data1="Age" data2="29 years" />
            <ProfileUserData data1="Gender" data2="Male" />
            <ProfileUserData data1="E-mail" data2="testinf@test.com" />
            <ProfileUserData data1="Phone" data2="321-275-6540" />
          </div>
          <div className="w-full flex justify-around">
            <button className=" bg-dark-green  text-white tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-300">
              Edit profile
            </button>

            <button className=" bg-dark-green text-white tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-300">
              New pet
            </button>
          </div>
        </div>
      </section>
      {/* Pet Section */}
    </main>
  );
};

export default Userprofile;
