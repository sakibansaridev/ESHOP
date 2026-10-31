import React from 'react'


const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },

    {
        title: "About",
        link: "/#",
    },

    {
        title: "Contact",
        link: "/#",
    },

    {
        title: "Blog",
        link: "/#",
    },
]



const Footer = () => {
    return (
        <div className='dark:bg-gray-950 '>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <a href="#" className='text-primary font-semibold 
                        tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            Eshop
                        </a>
                        <p className="text-gray-600 lg:pr-24 pt-3 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus repudiandae
                            recusandae illum accusamus ullam
                            autem explicabo, modi obcaecati pariatur!
                        </p>
                        <p className='text-gray-500 mt-4 '>
                            Made with ❤️ by The Coding Journey
                        </p>
                        <a href='#' target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                            Visit my website
                        </a>
                    </div>
                    {/* footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a
                                                href={data.link}
                                                className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300'
                                            >
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a
                                                href={data.link}
                                                className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300'
                                            >
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a
                                                href={data.link}
                                                className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300'
                                            >
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
