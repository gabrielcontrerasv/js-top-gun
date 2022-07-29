import React from "react";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div className=" h-full">
      <Navigation />
      <main className="absolute h-full w-full grid grid-cols-8 grid-rows-[repeat(8,_50vh_minmax(50vh,_1fr))] overflow-hidden bg-[#edf4f4] max-w-[1540px]">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
