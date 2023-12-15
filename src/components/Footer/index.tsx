import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
            className="bg-light w-full mt-5  px-4 sm:px-20 "
        >
            <div className="flex flex-col md:flex-row justify-around items-center">
                <motion.div
                    className="text-lg px-4 py-2 flex flex-col justify-center items-center cursor-pointer w-full md:w-1/2"
                    id="logo"
                    whileHover={{ scale: 1.05 }}
                >
                    <Link href="/">
                        <motion.div {...fadeInUp}>
                            <Image width={100} height={100} src="/logo.png" alt="logo" className="mb-2" />
                        </motion.div>
                    </Link>
                    <motion.p className="text-gray-600 text-center" {...fadeInUp}>
                        SweetCart is a platform for you to buy delicious sweets.
                    </motion.p>
                </motion.div>

                <hr className="w-full border-gray-300 my-4 md:hidden" />

                <div className="text-lg px-4 py-2 flex flex-col justify-center items-center cursor-pointer w-full md:w-1/4">
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    {['Email: info@sweetcart.com', 'Phone: +1 (123) 456-7890'].map((contactInfo) => (
                        <motion.p key={contactInfo} className=" text-gray-600" {...fadeInUp}>
                            {contactInfo}
                        </motion.p>
                    ))}
                </div>

                <hr className="w-full border-gray-300 my-4 md:hidden" />

                <div className="text-lg px-4 py-2 flex flex-col justify-center items-center cursor-pointer w-full md:w-1/6">
                    <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                    <motion.div className="flex justify-center md:justify-start items-center space-x-4" {...fadeInUp}>
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <Link key={index} href="/">
                                <motion.span
                                    className="text-gray-600 text-2xl hover:text-gray-800 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Icon />
                                </motion.span>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
