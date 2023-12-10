import Layout from '@/components/Layout';
import Categories from '@/components/Categories';
import Product from '@/components/Product';

export default function Home() {
    return (
        <Layout>
            <Categories />
            <Product />
        </Layout>
    );
}
