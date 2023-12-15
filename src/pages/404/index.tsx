// pages/404.js
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-screen h-[90vh]">
                <motion.img
                    src="/404.png"
                    alt="404"
                    className="w-1/2 sm:w-1/3 lg:w-1/4 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.h1
                    className="text-3xl font-bold mb-4 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Oops! Page Not Found
                </motion.h1>
                <motion.p
                    className="text-gray-600 text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    The page you are looking for might be in another universe.
                </motion.p>
                <Link href="/">
                    <motion.button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Return to Home
                    </motion.button>
                </Link>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
