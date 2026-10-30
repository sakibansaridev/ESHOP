import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import headphones from '../../assets/headphone.png'
import watches from '../../assets/smartwatch2.png'
import Products from '../Products/Products'
import Blog from '../Blog/Blog'


const BannerData = {
    discount: "50% off",
    title: "Happy Holidays",
    date: "10 jun to 28 jun",
    image: headphones,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "V4 me config file ki zarurat nahi, lekin agar project root se to CSS file me manually likhna padta hai:",
    bgColor: '#f42c37',
};

const BannerData2 = {
    discount: "30% off",
    title: "Happy Hours",
    date: "14 jun to 23 jun",
    image: watches,
    title2: "Smart Sale ",
    title3: "Winter Sale",
    title4: "V4 me config file ki zarurat nahi, lekin agar project root se to CSS file me manually likhna padta",
    bgColor: '#2dcc6f',
};



function Home() {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white
        overflow-x-hidden duration-200
        '>
            <NavBar />
            <Hero />
            <Category />
            <Services />
            <Banner data={BannerData} />
            <Products />
            <Banner data={BannerData2} />
            <Blog />
        </div>
    )
}

export default Home