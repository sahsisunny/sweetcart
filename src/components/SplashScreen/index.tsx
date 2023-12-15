import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const SplashScreen: React.FC = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }, [controls]);

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            exit={{ opacity: 0, y: 50, transition: { duration: 2 } }}
        >
            <Link href="/" className="bg-transparent animate-pulse rounded-full shadow-4xl w-[300px] h-[300px]">
                <motion.img
                    src="/ladoo.png"
                    className="bg-transparent"
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
            </Link>

            <motion.p
                className="text-4xl font-bold mt-5 text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                SweetCart
            </motion.p>
        </motion.div>
    );
};

export default SplashScreen;
