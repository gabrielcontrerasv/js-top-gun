import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PathCategory = (props) => {
  const router = useRouter();

  return (
    <Link href={props.path}>
      <div
        className={
          router.pathname === props.path
            ? `flex items-center gap-4  border-l-4 border-white  hover:bg-[#7bdbdb9c] cursor-pointer pl-5 py-2 font-medium mt-2`
            : `flex gap-4 py-2 hover:bg-[#7bdbdb9c] cursor-pointer pl-6 mt-2 duration-500`
        }
      >
        {props.children}
      </div>
    </Link>
  );
};

export default PathCategory;
