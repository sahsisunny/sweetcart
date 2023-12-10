import Layout from '@/components/Layout';
import CategoriesItem from '@/components/Categories/CategoriesItem';
import Breadcrumbs from '@/components/Breadcrumbs';

const breadcrumbs = [
    { text: 'Home', href: '/' },
    { text: 'Categories', href: '/categories' },
];

const data = [
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
    },
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
    },
];

function Categories() {
    return (
        <Layout>
            <section className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-5">Categories</h2>
                <Breadcrumbs items={breadcrumbs} />
                <div className="flex flex-row mb-2 flex-wrap justify-center items-center py-10">
                    {data.map((item, index) => (
                        <CategoriesItem key={index} img={item.img} title={item.title} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Categories;
