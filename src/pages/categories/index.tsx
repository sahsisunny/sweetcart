import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoriesItem from '@/components/Categories/CategoriesItem';
import Layout from '@/components/Layout';
import { categories } from '@/data/categories';

const breadcrumbs = [
    { text: 'Home', href: '/' },
    { text: 'Categories', href: '/categories' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

function Categories() {
    return (
        <Layout>
            <motion.section
                className="w-screen flex flex-col justify-center items-center bg-gray-100 py-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-5" variants={itemVariants}>
                    Categories
                </motion.h2>
                <Breadcrumbs items={breadcrumbs} />
                <motion.div
                    className="flex flex-row mb-2 flex-wrap justify-center items-center py-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CategoriesItem img={item.img} title={item.title} href={item.href} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </Layout>
    );
}

export default Categories;
