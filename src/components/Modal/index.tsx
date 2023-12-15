import React, { useEffect, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';

interface LoginModalProps {
    onClose: () => void;
}

const Modal = ({ onClose }: LoginModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
    }, [controls]);

    return (
        <motion.dialog
            className="fixed bottom-0 left-0 w-full h-full flex justify-center sm:items-center items-end bg-black bg-opacity-80"
            id="login-modal"
            initial={{ opacity: 0, y: window.innerWidth < 768 ? 0 : 50 }}
            animate={controls}
            exit={{ opacity: 0, y: window.innerWidth < 768 ? 0 : 50 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                ref={modalRef}
                className="p-6 rounded-md sm:w-[40%] w-screen relative flex flex-col justify-center items-center bg-white "
                initial={{ y: window.innerWidth < 768 ? 0 : 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: window.innerWidth < 768 ? 0 : 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-center w-full mb-8">
                    <h2 className="font-bold text-lg">Sign in</h2>
                    <button className="text-md" id="close-login-modal" onClick={onClose}>
                        <IoCloseSharp style={{ fontSize: '1.5em' }} />
                    </button>
                </div>

                <div className="flex justify-center items-center w-full mb-8 border border-gray-300 rounded-md px-4 py-1 text-lg">
                    <span className="mr-2">+91</span>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        id="phone"
                        maxLength={10}
                        autoFocus={true}
                        className="border-none outline-inherit px-r-4 py-1 w-full focus:outline-none active:outline-none"
                    />
                </div>

                <button className="bg-black text-white px-4 py-2 text-md">Send OTP</button>
            </motion.div>
        </motion.dialog>
    );
};

export default Modal;
