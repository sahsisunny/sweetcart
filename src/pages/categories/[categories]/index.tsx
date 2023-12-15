import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import { product } from '@/data/product';
import { useRouter } from 'next/router';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

function Categories() {
    const router = useRouter();
    const { categories: categoryName } = router.query as { categories: string };
    const title = categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1);

    const breadcrumbs = [
        { text: 'Home', href: '/' },
        { text: 'Categories', href: '/categories' },
        { text: categoryName, href: `/${categoryName}` },
    ];

    return (
        <Layout>
            <motion.section
                className="w-screen flex flex-col  justify-center items-center bg-gray-100 py-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-5" variants={itemVariants}>
                    {title}
                </motion.h2>
                <Breadcrumbs items={breadcrumbs} />
                <motion.div
                    className="flex flex-row mb-2 flex-wrap justify-center items-center py-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <Product title={title} items={product} />
                    </motion.div>
                </motion.div>
            </motion.section>
        </Layout>
    );
}

export default Categories;
