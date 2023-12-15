import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GrFavorite } from 'react-icons/gr';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';

interface ProductDetailProps {
    title: string;
    description: string;
    mrp: number;
    imageUrls: string[];
    offer: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ title, description, mrp, imageUrls, offer }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState(imageUrls[0]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setIsAddedToCart(true);
        setQuantity(1);
        console.log(`Added ${quantity} ${title} to the cart`);
    };

    const handleToggleFavorite = () => {
        setIsFavorite((prevFavorite) => !prevFavorite);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-screen flex flex-col lg:flex-row justify-center  lg:px-20 mt-10"
            >
                <motion.div
                    className="relative w-screen lg:w-1/2 flex flex-row justify-center p-4 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-[15%] flex flex-col   rounded-lg">
                        {imageUrls.map((url, index) => (
                            <motion.img
                                key={index}
                                src={url}
                                alt={title}
                                className=" object-cover  mb-2 rounded-lg cursor-pointer shadow-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ zIndex: currentImageIndex === index ? 1 : 0 }}
                                onClick={() => {
                                    setCurrentImageIndex(index);
                                    setImage(url);
                                }}
                            />
                        ))}
                    </div>
                    <motion.img
                        src={image}
                        alt={title}
                        className=" w-[85%] rounded-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div className="absolute top-4 right-4 p-3 flex flex-col justify-center">
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={handleToggleFavorite}
                            className="  p-3 rounded-full text-2xl mb-2 shadow-lg"
                        >
                            <GrFavorite />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            className="  p-3 rounded-full text-2xl mb-2 shadow-lg"
                        >
                            <AiOutlineShareAlt />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative w-screen lg:w-1/2 flex flex-col  p-4 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-2xl lg:text-3xl font-semibold mb-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h2>
                    <motion.hr
                        className="pb-4 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.hr>
                    <motion.p
                        className="text-gray-600 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {description}
                    </motion.p>
                    <motion.hr
                        className="pb-4 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.hr>
                    <motion.div
                        className="text-2xl  text-yellow-500 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-gray-600 font-bold ml-2">₹{mrp - (mrp * offer) / 100}/-</span>
                        <span className="text-gray-400 text-sm line-through ml-2 mr-2">₹{mrp}</span>
                        <span className=" text-red-400 font-bold">{offer}% off</span>
                    </motion.div>
                    <motion.hr
                        className="pb-4 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.hr>

                    <motion.div
                        className="text-xl font-bold text-yellow-500 flex flex-row "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h3
                            className="text-gray-600 mb-4 w-1/4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Details
                        </motion.h3>
                        <motion.div
                            className="text-gray-600 mb-4 w-1/2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.ul
                                className="text-gray-600 mb-4 text-sm space-y-2 list-disc"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.li className="flex items-center ">
                                    <span className="mr-2 font-semibold">Brand:</span>
                                    {title}
                                </motion.li>
                                <li className=" 	flex items-center">
                                    <span className="mr-2 font-semibold">Unit:</span>1
                                </li>
                                <li className="	flex items-center">
                                    <span className="mr-2 font-semibold">Material:</span>
                                    {title}
                                </li>
                                <li className="	flex items-center">
                                    <span className="mr-2 font-semibold">Color:</span>
                                    {title}
                                </li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                    <motion.hr
                        className="pb-4 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.hr>

                    <div className="flex items-center mb-4">
                        <motion.button
                            className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold ml-2 w-1/2"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Buy Now <AiOutlineShopping className="inline-block ml-2" />
                        </motion.button>
                        {isAddedToCart ? (
                            <>
                                <motion.button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold ml-2 w-1/4"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </motion.button>
                                <motion.span
                                    className="text-xl font-bold  mx-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {quantity}
                                </motion.span>
                                <motion.button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold ml-2 w-1/4"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </motion.button>
                            </>
                        ) : (
                            <>
                                <motion.button
                                    onClick={handleAddToCart}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold ml-2 w-1/2"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Add to Cart <FaCartPlus className="inline-block ml-2" />
                                </motion.button>
                            </>
                        )}
                    </div>
                    <motion.hr
                        className="pb-4 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.hr>
                </motion.div>
            </motion.div>
        </>
    );
};

export default ProductDetail;
