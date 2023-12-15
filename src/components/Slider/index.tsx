import React, { useEffect, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

import Image from 'next/image';
import { cartItems } from '@/data/product'; // Assuming you have a data file for cart items

interface CartItemProps {
    img: string;
    title: string;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ img, title, quantity }) => {
    return (
        <div className="flex flex-row  items-center justify-between  p-2 m-2 border-[1px]">
            <Image src={img} width={100} height={100} alt="cart item" className="object-contain ratio-1:1 rounded-lg" />
            <div className="w-full flex flex-row justify-between items-center ml-3">
                <p className="text-md font-bold text-gray-800">{title}</p>
                <p className="text-md text-gray-800">Quantity: {quantity}</p>
            </div>
        </div>
    );
};

interface CustomSliderProps {
    isOpen: boolean;
    openFrom: 'left' | 'right';
    onClose: () => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ isOpen, openFrom, onClose }) => {
    const sliderStyle: React.CSSProperties = {
        width: '30%',
        height: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 999,
        overflow: 'hidden',
        [openFrom]: isOpen ? 0 : '-30%',
        transition: '0.3s ease',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    };

    const slideContainerStyle: React.CSSProperties = {
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        transition: 'transform 0.3s ease',
        transform: `translateX(${isOpen ? '0%' : openFrom === 'left' ? '-100%' : '100%'})`,
    };

    const sliderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div style={sliderStyle} className="h-screen px-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold text-center mt-5">Cart Items</h1>
                <button
                    onClick={onClose}
                    className="rounded-full  m-5 p-2 bg-white shadow-lg hover:bg-gray-100 cursor-pointer"
                >
                    <IoCloseSharp className="text-2xl text-black" />
                </button>
            </div>
            <div style={slideContainerStyle} className="h-[90vh] no-scrollbar">
                {cartItems.map((item, index) => (
                    <CartItem key={index} img={item.img} title={item.title} quantity={item.quantity} />
                ))}{' '}
            </div>
        </div>
    );
};

export default CustomSlider;
