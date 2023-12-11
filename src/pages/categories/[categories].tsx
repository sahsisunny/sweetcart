import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import Product from '@/components/Product';
import { useRouter } from 'next/router';

const data = [
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
        subtitle: 'Paneer Chilli with Rice',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
        subtitle: 'Egg Rolls with extra cheese',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
        subtitle: 'Menchurian with tasty sauce',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
        subtitle: 'Chowmein with extra cheese',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
        quantity: 5,
        rating: 4.5,
        price: 29.99,
        offer: 10,
    },
];

function Categories() {
    const router = useRouter();
    const { categories: categoryName } = router.query as { categories: string };

    const breadcrumbs = [
        { text: 'Home', href: '/' },
        { text: 'Categories', href: '/categories' },
        { text: categoryName, href: `/${categoryName}` },
    ];

    return (
        <Layout>
            <section className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-5">{categoryName.toUpperCase()}</h2>
                <Breadcrumbs items={breadcrumbs} />
                <div className="flex flex-row mb-2 flex-wrap justify-center items-center py-10">
                    <Product title={categoryName.toUpperCase()} items={data} />
                </div>
            </section>
        </Layout>
    );
}

export default Categories;
