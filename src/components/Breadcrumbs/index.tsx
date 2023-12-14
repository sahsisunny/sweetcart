import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
    text: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <motion.nav
            className="text-sm font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ol className="list-none p-0 inline-flex">
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {index > 0 && <span className="mx-2">/</span>}
                        <Link href={item.href}>
                            <motion.p className="text-blue-500" whileHover={{ scale: 1.05 }}>
                                {item.text}
                            </motion.p>
                        </Link>
                    </motion.li>
                ))}
            </ol>
        </motion.nav>
    );
};

export default Breadcrumbs;
