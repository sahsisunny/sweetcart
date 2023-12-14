import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CategoriesProps {
    img: string;
    title: string;
    href: string;
}

const CategoriesItem: React.FC<CategoriesProps> = ({ img, title, href }) => {
    return (
        <motion.div
            className="category w-[16rem] min-w-[250px] flex flex-col items-center justify-center bg-white p-5 cursor-pointer mx-2 hover:shadow-lg transition duration-200 ease-in-out mb-2"
            whileHover={{ scale: 1.05 }}
        >
            <Link href={href}>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                    <Image
                        src={img}
                        width={200}
                        height={200}
                        alt="category"
                        className="w-50 h-50 object-contain ratio-1:1 rounded-lg"
                    />
                </motion.div>
            </Link>
            <Link href={href}>
                <motion.p
                    className="text-md font-bold text-gray-800 mt-2 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                >
                    {title}
                </motion.p>
            </Link>
        </motion.div>
    );
};

export default CategoriesItem;
