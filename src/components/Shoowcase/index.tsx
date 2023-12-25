import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { ourSweetsData } from '@/data/ourSweets';

interface ShowcaseItemProps {
    imgSrc: StaticImageData;
    imgAlt: string;
    title: string;
    description: string;
}

function ShowcaseItem({ imgSrc, imgAlt, title, description }: ShowcaseItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center sm:w-[20%] w-[90%] p-4 bg-yellow-400 shadow-md text-black rounded-2xl"
        >
            <div className="mb-4">
                <Image className="w-full h-[10rem]" src={imgSrc} alt={imgAlt} width={224} height={224} />
            </div>
            <div className="text-lg font-bold mb-2">{title}</div>
            <div className="text-sm text-center">{description}</div>
        </motion.div>
    );
}

const Showcase = () => {
    return (
        <div className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10">
            <div className="text-2xl font-bold mb-4">Our Sweets</div>
            <div className="flex flex-wrap justify-center  gap-4">
                {ourSweetsData.map((item) => (
                    <ShowcaseItem
                        key={item.title}
                        imgSrc={item.imgSrc}
                        imgAlt={item.imgAlt}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Showcase;
