import React from "react";

const ProfileUserData = ({ data1, data2 }) => {
  return (
    <div className="w-full flex justify-between tracking-wide mt-5">
      <p className="font-bold">{data1}</p>
      <p>{data2}</p>
    </div>
  );
};

export default ProfileUserData;
