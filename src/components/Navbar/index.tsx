import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import React, { useState } from 'react';
import CustomSlider from '@/components/Slider';
import Modal from '@/components/Modal';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
            <motion.nav
                className="w-full h-16 shadow-md justify-between items-center px-4 lg:px-20 py-10 hidden lg:flex sticky top-0 left-0 z-10 bg-white"
                id="navbar"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="text-lg  px-4 py-2 flex justify-center items-center  cursor-pointer"
                    id="logo"
                    whileHover={{ scale: 1.05 }}
                >
                    <Link href="/">
                        <Image width={200} height={200} src="/logo.png" alt="logo" />
                    </Link>
                </motion.div>

                <ul className="links text-lg flex justify-center items-center">
                    <motion.li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.05 }}>
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.05 }}>
                        <Link href="/categories">Categories</Link>
                    </motion.li>
                    <motion.li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.05 }}>
                        About
                    </motion.li>
                    <motion.li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" whileHover={{ scale: 1.05 }}>
                        Contact
                    </motion.li>
                </ul>

                <div className="cart text-3xl flex justify-center items-center" id="cart">
                    <motion.div
                        className="text-3xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]"
                        whileHover={{ scale: 1.05 }}
                    >
                        <CiSearch />
                    </motion.div>
                    <motion.div
                        className="relative text-3xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]"
                        whileHover={{ scale: 1.05 }}
                        onClick={handleSliderToggle}
                    >
                        <CiShoppingCart />
                        <motion.span
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1 truncate"
                            whileHover={{ scale: 1.05 }}
                        >
                            {displayContent}
                        </motion.span>
                    </motion.div>

                    <motion.div
                        className="text-3xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setShowModal(true)}
                    >
                        <CiUser />
                    </motion.div>
                </div>
                {showModal && <Modal onClose={onClose} />}
            </motion.nav>
            <CustomSlider
                isOpen={sliderOpen}
                openFrom="right" // or "left"
                onClose={handleSliderToggle}
            />
        </>
    );
}

export default Navbar;
