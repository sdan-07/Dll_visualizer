import React from "react";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 md:px-32 py-3.5 sm:py-3 border-2 border-slate-200 shadow-2xl">
      <Left />
      <Right />
    </div>
  );
};

export default Navbar;
