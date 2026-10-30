import React from 'react'
import Heading from '../shared/Heading'
import ProductCard from './ProductCard'

import Img1 from '../../assets/headphone.png'
import Img2 from '../../assets/watch.png'
import Img3 from '../../assets/macbook.png'
import Img4 from '../../assets/speaker.png'
import Img5 from '../../assets/earphone.png'
import Img6 from '../../assets/gaming-pc.png'

const productsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphones",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
];

const productsData2 = [
    {
        id: 1,
        img: Img5,
        title: "Boat Headphones",
        price: "120",
        aosDelay: "0",
    },

    {
        id: 2,
        img: Img6,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },

    {
        id: 3,
        img: Img1,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },

    {
        id: 4,
        img: Img2,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
];

function Products() {
    return (
        <div>
            <div className='container'>
                {/* Header section */}
                <Heading title='Our Products' subtitle='Explore Our Products' />

                {/* Body Section */}
                <ProductCard productsData={productsData} />
                <ProductCard productsData={productsData2} />
            </div>
        </div>
    )
}

export default Products
