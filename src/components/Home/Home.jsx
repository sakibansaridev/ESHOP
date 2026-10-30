import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import headphones from '../../assets/headphone.png'
import Products from '../Products/Products'

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
        </div>
    )
}

export default Home