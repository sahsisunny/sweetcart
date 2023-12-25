import Categories from '@/components/Categories';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import { product } from '@/data/product';
import Carousel from '@/components/Carousel';
// import image
import sweetsImage from './../../public/carousel/sweets.webp';
import ladduImage from './../../public/carousel/laddu.webp';
import burgerImage from './../../public/carousel/burger.webp';
import Showcase from '@/components/Shoowcase';

const items = [
    {
        title: 'Special Sweets',
        description:
            'Indulge in the exquisite flavor of our Special Sweets. A delightful blend of traditional sweetness with a hint of carefully selected spices to add a unique twist.',
        viewButton: 'View',
        buyNowButton: 'Buy Now',
        image: sweetsImage,
    },
    {
        title: 'Laddu',
        description:
            'Experience the rich taste of our Laddu. Handcrafted with precision and infused with a harmonious mix of spices, creating a laddu that is both sweet and savory.',
        viewButton: 'View',
        buyNowButton: 'Buy Now',
        image: ladduImage,
    },
    {
        title: 'Spicy Burger',
        description:
            'Savor the bold flavors of our Spicy Burger. Each bite is a burst of mouthwatering spices, creating a satisfying and memorable culinary experience.',
        viewButton: 'View',
        buyNowButton: 'Buy Now',
        image: burgerImage,
    },
];

export default function Home() {
    return (
        <Layout>
            <Carousel items={items} />
            <Showcase />
            <Categories />
            <Product title="Popular Products" items={product} />
        </Layout>
    );
}
