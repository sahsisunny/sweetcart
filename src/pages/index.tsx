import Categories from '@/components/Categories';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import { product } from '@/data/product';

export default function Home() {
    return (
        <Layout>
            <Categories />
            <Product title="Popular Products" items={product} />
        </Layout>
    );
}
