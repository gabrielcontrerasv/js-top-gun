import React from "react";
import Navigation from "./Navigation";
// import Developers from "./Developers";

function Layout(props) {
  return (
    <div className="">
      <Navigation />
      {/* <Developers /> */}
      <main className="absolute h-full w-full grid grid-cols-2 grid-rows-[repeat(2,_50vh_minmax(50vh,_1fr))] md:grid-cols-8 md:grid-rows-[repeat(4,_50vh_minmax(50vh,_1fr))] md:overflow-hidden bg-[#edf4f4] max-w-[1540px]">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
