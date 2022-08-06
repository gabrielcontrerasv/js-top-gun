import React from "react";
import Navigation from "./Navigation";
import GeneralContextProvider from "../../contexts/GeneralContext";

function Layout(props) {
  return (
    <div className="">
      {/* <Navigation /> */}
      <GeneralContextProvider>
        <main className="grid-cols-12 grid-rows-7  ">{props.children}</main>
      </GeneralContextProvider>
    </div>
  );
}

export default Layout;
