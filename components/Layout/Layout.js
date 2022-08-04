import React from "react";
import Navigation from "./Navigation";
import PetsContextProvider from "../../contexts/PetsContext";

function Layout(props) {
  return (
    <div className="">
      {/* <Navigation /> */}
      <PetsContextProvider>
        <main className="absolute h-full w-full grid grid-cols-2 grid-rows-[repeat(2,_50vh_minmax(50vh,_1fr))] md:grid-cols-12 md:grid-rows-[repeat(7,_50vh_minmax(50vh,_1fr))]  bg-[#edf4f4] ">
          {props.children}
        </main>
      </PetsContextProvider>
    </div>
  );
}

export default Layout;
