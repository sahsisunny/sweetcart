import CarouselItems from './CarouselItems';
import { useState, useEffect } from 'react';
import { CarouselItem } from './CarouselItems';
import { motion } from 'framer-motion';

interface CarouselProps {
    items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [items.length]);

    return (
        <motion.div
            className="w-full overflow-hidden sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="flex transition-transform ease-in-out duration-800"
                style={{ x: `-${activeIndex * 100}%` }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CarouselItems title={item.title} description={item.description} image={item.image} />
                    </motion.div>
                ))}
            </motion.div>
            <div className="relative top-[-1rem] left-0 flex justify-center mt-4">
                {items.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`w-4 h-4 rounded-full bg-gray-500 cursor-pointer mx-2`}
                        onClick={() => setActiveIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        animate={{ scale: index === activeIndex ? 1.2 : 1 }}
                        transition={{ duration: 0.2 }}
                    ></motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Carousel;
