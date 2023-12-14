import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import React, { useState } from 'react';
import CustomSlider from '@/components/Slider';
import Modal from '@/components/Modal';
import Image from 'next/image';

function Navbar() {
    const [showModal, setShowModal] = React.useState(false);
    const onClose = () => setShowModal(false);
    const [sliderOpen, setSliderOpen] = useState(false);
    const itemCount = 10;
    const displayContent = itemCount > 99 ? '99+' : itemCount;

    const handleSliderToggle = () => {
        setSliderOpen(!sliderOpen);
    };

    return (
        <>
            <nav
                className="w-full h-16 shadow-md  justify-between items-center px-4 lg:px-20 py-10 hidden lg:flex sticky top-0 left-0 z-10 bg-white"
                id="navbar"
            >
                <div className="text-lg  px-4 py-2 flex justify-center items-center  cursor-pointer" id="logo">
                    <Image width={200} height={200} src="/logo.png" alt="logo" />
                </div>

                <ul className="links text-lg flex justify-center items-center">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleSliderToggle}>
                        Categories
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                </ul>

                <div className="cart text-3xl flex justify-center items-center" id="cart">
                    <CiSearch className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]" />
                    <div className="relative  justify-center items-center">
                        <CiShoppingCart className="text-3xl mr-2" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1 truncate">
                            {displayContent}
                        </span>
                    </div>
                    <CiUser
                        className="text-5xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]"
                        onClick={() => setShowModal(true)}
                    />
                </div>
                {showModal && <Modal onClose={onClose} />}
            </nav>
            <CustomSlider
                isOpen={sliderOpen}
                openFrom="right" // or "left"
                onClose={handleSliderToggle}
            />
        </>
    );
}

export default Navbar;
