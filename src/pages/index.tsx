import Categories from '@/components/Categories';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import { product } from '@/data/product';
import Carousel from '@/components/Carousel';

const items = [
    {
        title: 'Spicy Noodles',
        description: 'This is a spicy noodles. In this noodles we have added some spices to make it more spicy.',
        image: '/categories/chowmein.png',
    },
    {
        title: 'Spicy Noodles',
        description: 'This is a spicy noodles. In this noodles we have added some spices to make it more spicy.',
        viewButton: 'View',
        buyNowButton: 'Buy Now',
        image: '/categories/chowmein.png',
    },
    {
        title: 'Spicy Noodles',
        description: 'This is a spicy noodles. In this noodles we have added some spices to make it more spicy.',
        viewButton: 'View',
        buyNowButton: 'Buy Now',
        image: '/categories/chowmein.png',
    },
];

export default function Home() {
    return (
        <Layout>
            <Carousel items={items} />
            <Categories />
            <Product title="Popular Products" items={product} />
        </Layout>
    );
}
