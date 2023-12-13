import React, { useEffect, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaAngleRight } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/categories';

interface CategoriesProps {
    img: string;
    title: string;
    href: string;
}

const CategoriesItem: React.FC<CategoriesProps> = ({ img, title, href }) => {
    return (
        <Link
            className="flex flex-row  items-center justify-between  p-2 m-2 border-[1px] cursor-pointer hover:shadow-md transition duration-400 ease-in-out"
            href={href}
        >
            <Image
                src={img}
                width={100}
                height={100}
                alt="category"
                className=" hover:scale-105 transition duration-400 ease-in-out object-contain ratio-1:1 rounded-lg"
            />
            <div className="w-full flex flex-row justify-between items-center ml-3">
                <p className="text-md font-bold text-gray-800 hover:underline">{title}</p>
                <FaAngleRight className="text-2xl text-gray-800 ml-2" />
            </div>
        </Link>
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
                <h1 className="text-2xl font-bold text-center mt-5">Categories</h1>
                <button
                    onClick={onClose}
                    className="rounded-full  m-5 p-2 bg-white shadow-lg hover:bg-gray-100 cursor-pointer"
                >
                    <IoCloseSharp className="text-2xl text-black" />
                </button>
            </div>
            <div style={slideContainerStyle} className="h-[90vh] no-scrollbar">
                {categories.map((item, index) => (
                    <CategoriesItem key={index} img={item.img} title={item.title} href={item.href} />
                ))}{' '}
            </div>
        </div>
    );
};

export default CustomSlider;
