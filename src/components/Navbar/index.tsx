import React from "react";
import { CiBoxList, CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { FaStoreAlt } from "react-icons/fa";
import Modal from "@/components/Modal";

function Navbar() {
  const [showModal, setShowModal] = React.useState(false);
  const onClose = () => setShowModal(false);

  return (
    <nav
      className="w-full h-16 shadow-md  justify-between items-center px-4 lg:px-20 py-10 hidden lg:flex"
      id="navbar"
    >
      <div
        className="categories text-lg rounded-[30px] px-4 py-2 flex justify-center items-center hover:bg-gray-100 cursor-pointer lg:flex"
        id="categories"
      >
        <CiBoxList className="text-2xl mr-2" /> Categories
      </div>

      <div
        className="logo text-lg flex justify-center items-center"
        id="logo"
      >
        <FaStoreAlt className="text-3xl mr-2" /> Sanjay Ji Misthan Bhandar And
        Resturent
      </div>

      <div
        className="cart text-3xl flex justify-center items-center"
        id="cart"
      >
        <CiSearch className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]" />
        <CiShoppingCart className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]" />
        <CiUser
          className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && <Modal onClose={onClose} />}
    </nav>
  );
}

export default Navbar;
