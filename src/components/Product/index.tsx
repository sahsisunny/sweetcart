import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';

interface ProductItemProps {
    img: string;
    title: string;
    subtitle?: string;
    addToCart?: () => void;
    price: number;
}

const ProductItem = ({ img, title, subtitle, price }: ProductItemProps) => {
    return (
        <motion.div
            className="relative w-screen sm:w-80 rounded-[1rem] p-4 sm:m-4 shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.1 }}
        >
            <div className="mb-4 relative rounded-tr-[4rem] rounded-[0.7rem]">
                <Image
                    width={300}
                    height={300}
                    priority={true}
                    src={img}
                    alt="product"
                    className="w-full h-full object-cover rounded-[inherit]"
                />

                <div className="absolute bottom-[-1rem] right-0 text-black font-black p-2 rounded-[1rem_1rem_2rem_2rem]  bg-yellow-400">
                    ₹{price}
                </div>
            </div>
            <label className="absolute top-2 right-4 text-2xl cursor-pointer">
                <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
                <GrFavorite />
            </label>
            <div className=" mb-4 ">
                <div className="font-black	 ">{title}</div>
                <div className="font-bold	mb-1 text-sm text-gray-600">{subtitle}</div>
            </div>
            <div className="flex justify-between items-center">
                <button
                    className="   font-black cursor-pointer px-0 py-2 rounded-[1.4rem_1.4rem_0.7rem_0.7rem] border-[none] text-black bg-yellow-400 flex justify-center items-center hover:bg-yellow-500 transition-all duration-500 ease-in-out w-[70%] mr-2
          "
                >
                    Buy Now
                </button>
                <button className="rounded-[1.4rem_1.4rem_0.7rem_0.7rem]  px-2 py-3 border-[none] flex justify-center items-center text-black bg-yellow-400 hover:bg-yellow-500 transition-all duration-500 ease-in-out w-[30%]">
                    <FaCartPlus />
                </button>
            </div>{' '}
        </motion.div>
    );
};

interface ProductProps {
    title: string;
    items: ProductItemProps[];
}

const Product = ({ title, items }: ProductProps) => {
    return (
        <motion.section
            className="w-screen flex flex-col justify-center items-center bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.1 }}
        >
            <div className="text-3xl font-bold mb-4">{title}</div>
            <div className="flex flex-row flex-wrap justify-center items-center">
                {items.map((item, index) => (
                    <ProductItem
                        key={index}
                        img={item.img}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                    />
                ))}
            </div>
        </motion.section>
    );
};

export default Product;
