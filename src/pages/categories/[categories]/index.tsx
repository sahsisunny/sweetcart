import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import { product } from '@/data/product';
import { useRouter } from 'next/router';

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
            <section className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-5">{title}</h2>
                <Breadcrumbs items={breadcrumbs} />
                <div className="flex flex-row mb-2 flex-wrap justify-center items-center py-10">
                    <Product title={title} items={product} />
                </div>
            </section>
        </Layout>
    );
}

export default Categories;
