import CategoriesItem from '@/components/Categories/CategoriesItem';
import { categories } from '@/data/categories';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Categories = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }, [controls]);

    return (
        <motion.section
            className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
        >
            <motion.h2
                className="text-2xl font-semibold text-gray-800 text-center mb-5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                Top Categories
            </motion.h2>
            <motion.div
                className="sm:w-[90vw] w-screen
      flex flex-row items-center  overflow-x-scroll no-scrollbar"
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
            >
                {categories.map((item, index) => (
                    <CategoriesItem key={index} img={item.img} title={item.title} href={item.href} />
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Categories;
