import React from "react";
import Navigation from "./Navigation";
import PetsContextProvider from "../../contexts/PetsContext";

function Layout(props) {
  return (
    <div className="">
      {/* <Navigation /> */}
      <PetsContextProvider>
        <main className="grid-cols-12 grid-rows-7  bg-[#edf4f4] ">
          {props.children}
        </main>
      </PetsContextProvider>
    </div>
  );
}

export default Layout;
