import Layout from '@/components/Layout';
import CategoriesItem from '@/components/Categories/CategoriesItem';
import Breadcrumbs from '@/components/Breadcrumbs';

const breadcrumbs = [
    { text: 'Home', href: '/' },
    { text: 'Categories', href: '/categories' },
];

const product = [
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

const data = [
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
        href: '/categories/paneer-chilli',
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
        href: '/categories/rolls',
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
        href: '/categories/menchurian',
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
        href: '/categories/chowmein',
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
        href: '/categories/fried-rice',
    },
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
        href: '/categories/paneer-chilli',
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
        href: '/categories/rolls',
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
        href: '/categories/menchurian',
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
        href: '/categories/chowmein',
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
        href: '/categories/fried-rice',
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
                        <CategoriesItem key={index} img={item.img} title={item.title} href={item.href} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Categories;
