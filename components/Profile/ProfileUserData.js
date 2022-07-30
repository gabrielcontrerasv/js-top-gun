import React from "react";

const ProfileUserData = ({ data1, data2 }) => {
  return (
    <div className="w-full flex justify-between mb-3">
      <p className="font-semibold">{data1}</p>
      <p>{data2}</p>
    </div>
  );
};

export default ProfileUserData;
