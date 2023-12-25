import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

export interface CarouselItem {
    title: string;
    description: string;
    image: StaticImageData;
}

const CarouselItems = ({ title, description, image }: CarouselItem) => {
    return (
        <motion.div
            className="flex flex-col-reverse sm:flex-row justify-between items-center w-full mx-auto sm:p-10 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col sm:w-1/1 p-4 h-full">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl text-red-500 mb-4 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Our Special Dish
                </motion.h2>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-6xl text-yellow-500 mb-4 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {title}
                </motion.h2>
                <motion.p
                    className="  text-lg sm:text-2xl text-gray-500 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {description}
                </motion.p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold"
                        whileHover={{ scale: 1.05 }}
                    >
                        View Details
                    </motion.button>
                    <motion.button
                        className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold"
                        whileHover={{ scale: 1.05 }}
                    >
                        Order Now
                    </motion.button>
                </div>
            </div>
            <div className="sm:w-1/2 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Image
                        width={500}
                        height={500}
                        src={image}
                        alt={title}
                        className="rounded-md object-fit sm:w-[30rem] w-[16rem] h-full"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CarouselItems;
