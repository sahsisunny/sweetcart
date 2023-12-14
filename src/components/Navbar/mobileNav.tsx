import React from 'react';
import { motion } from 'framer-motion';
import { FaStoreAlt } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';

function NavbarMobile() {
    return (
        <motion.nav
            className="w-screen h-16 shadow-md flex justify-between items-center px-4 py-10 lg:hidden sticky top-0 left-0 z-10 bg-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="logo text-lg flex justify-center items-center"
                id="logo"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image width={150} height={150} src="/logo.png" alt="logo" />
            </motion.div>
            <motion.div
                className="text-4xl m-2 p-2 hover:bg-gray-100 cursor-pointer rounded-[50%]"
                whileHover={{ scale: 1.2 }}
            >
                <CiSearch />
            </motion.div>
        </motion.nav>
    );
}

export default NavbarMobile;
