import Layout from '@/components/Layout';
import Categories from '@/components/Categories';
import Product from '@/components/Product';

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

export default function Home() {
    return (
        <Layout>
            <Categories />
            <Product title="Popular Products" items={data} />
        </Layout>
    );
}
