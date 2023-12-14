import React from 'react';
import { FaStoreAlt } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';

function NavbarMobile() {
    return (
        <nav className="w-screen h-16 shadow-md flex justify-between items-center px-4 py-10 lg:hidden sticky top-0 left-0 z-10 bg-white">
            <div className="logo text-lg flex justify-center items-center " id="logo">
                <Image width={150} height={150} src="/logo.png" alt="logo" />
            </div>
            <CiSearch className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]" />
        </nav>
    );
}

export default NavbarMobile;
