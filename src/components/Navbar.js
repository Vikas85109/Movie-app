import React from "react";
import Mlogo from "../Mlogo.png";


function Navbar() {
  return (
    <>
      <div className="px-12 py-4 border items-center  flex space-x-8 bg-slate-700">
        <img className="h-10 " src={Mlogo} />
        <div className="text-blue-400 font-bold text-3xl">Movies</div>
        <div className="text-blue-400 font-bold text-3xl">Favourites</div>
      </div>
    </>
  );
}

export default Navbar;
