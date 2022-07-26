import React from "react";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className="ml-0 md:pl-[72px] h-full w-full">{props.children}</main>
    </div>
  );
}

export default Layout;
