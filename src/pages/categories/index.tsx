import Breadcrumbs from '@/components/Breadcrumbs';
import CategoriesItem from '@/components/Categories/CategoriesItem';
import Layout from '@/components/Layout';
import { categories } from '@/data/categories';

const breadcrumbs = [
    { text: 'Home', href: '/' },
    { text: 'Categories', href: '/categories' },
];

function Categories() {
    return (
        <Layout>
            <section className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-5">Categories</h2>
                <Breadcrumbs items={breadcrumbs} />
                <div className="flex flex-row mb-2 flex-wrap justify-center items-center py-10">
                    {categories.map((item, index) => (
                        <CategoriesItem key={index} img={item.img} title={item.title} href={item.href} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Categories;
