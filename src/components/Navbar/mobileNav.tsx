import React from "react";
import { FaStoreAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function NavbarMobile() {
  return (
    <nav className="w-full h-16 shadow-md flex justify-between items-center px-4 py-10 lg:hidden sticky top-0 left-0 bg-white z-10">
      <div className="logo text-lg flex justify-center items-center " id="logo">
        <FaStoreAlt className="text-3xl mr-2" />
        <span className="tracking-wide text-center">
          Sanjay Ji Misthan Bhandar And Resturent
        </span>
      </div>

      <CiSearch className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]" />
    </nav>
  );
}

export default NavbarMobile;
