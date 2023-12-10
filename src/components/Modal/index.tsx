import React, { useEffect, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface LoginModalProps {
    onClose: () => void;
}

const Modal = ({ onClose }: LoginModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

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

    return (
        <dialog
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 "
            id="login-modal"
        >
            <div
                ref={modalRef}
                className=" p-6 rounded-md sm:w-[30%] w-screen relative flex flex-col justify-center items-center bg-white "
            >
                <div className=" flex justify-between items-center w-full mb-8">
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
            </div>
        </dialog>
    );
};

export default Modal;
