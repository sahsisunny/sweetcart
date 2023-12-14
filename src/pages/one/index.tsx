import React from 'react';
import ProductDetail from '@/components/Product/ProductDetail';
import Layout from '@/components/Layout';

const product = {
    imageList: ['/categories/paneer.png', '/categories/rolls.png', '/categories/friedrice.png'],
    title: 'Paneer Chilli',
    description:
        'Experience the perfect blend of succulent paneer cubes stir-fried in a flavorful blend of spices, tossed with colorful bell peppers, and served with aromatic fried rice. A delightful fusion of Indian and Chinese cuisines.',
    quantity: 5,
    rating: 4.5,
    mrp: 165,

    offer: 10,
};

const DynamicProductDetailPage = () => {
    return (
        <Layout>
            <ProductDetail
                title={product.title}
                description={product.description}
                mrp={product.mrp}
                imageUrls={product.imageList}
                offer={product.offer}
            />
        </Layout>
    );
};

export default DynamicProductDetailPage;
