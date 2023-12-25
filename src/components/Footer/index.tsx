import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-light w-full mt-5  px-4 sm:px-20 pb-5 shadow-2xl flex flex-col md:flex-row justify-between gap-4"
        >
            <motion.div className=" px-4 py-2 flex flex-col  cursor-pointer w-full md:w-1/4" id="logo">
                <Link href="/">
                    <motion.div {...fadeInUp}>
                        <Image width={100} height={100} src="/logo.png" alt="logo" className="mb-2" />
                    </motion.div>
                </Link>
                <motion.p className="text-gray-600 " {...fadeInUp}>
                    SweetCart, an enticing online destination, offers a delectable assortment of sweets for you to savor
                    and purchase with ease.{' '}
                </motion.p>

                <motion.span className="text-gray-600 text-lg gap-2 transition duration-300 flex items-center mt-4">
                    <MdEmail /> help@sweetcart.com
                </motion.span>
                <motion.span className="text-gray-600 text-lg gap-2 transition duration-300 flex items-center">
                    <IoCall />
                    +91 7759923xxxx
                </motion.span>
            </motion.div>

            <hr className="w-full border-gray-300 my-4 md:hidden" />
            <div className="text-lg px-4 py-2 flex flex-col  cursor-pointer w-full md:w-1/4">
                <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
                {['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'].map((hours) => (
                    <motion.p key={hours} className=" text-gray-600" {...fadeInUp}>
                        {hours}
                    </motion.p>
                ))}
            </div>
            <hr className="w-full border-gray-300 my-4 md:hidden" />

            <div className="text-lg px-4 py-2 flex flex-col  cursor-pointer w-full md:w-1/4 gap-2">
                <h2 className="text-xl font-semibold mb-2 ">Links</h2>
                {['Home', 'Categories', 'About', 'Contact'].map((link) => (
                    <motion.p key={link} className=" text-gray-600" {...fadeInUp}>
                        {link}
                    </motion.p>
                ))}
            </div>

            <hr className="w-full border-gray-300 my-4 md:hidden" />

            <div className="text-lg px-4 py-2 flex flex-col  cursor-pointer w-full md:w-1/4">
                {/* new leeter email */}
                <h2 className="text-xl font-semibold mb-2 ">Newsletter</h2>
                <motion.p className=" text-gray-600" {...fadeInUp}>
                    Subscribe to our newsletter and get 10% off your first purchase
                </motion.p>
                <motion.div className="w-full flex flex-col gap-2 mt-4" {...fadeInUp}>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                    />
                    <button className="w-full px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition duration-300">
                        Subscribe
                    </button>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
