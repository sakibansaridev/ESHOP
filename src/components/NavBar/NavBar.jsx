import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "#Home"
    },
    {
        id: 2,
        name: "Shop",
        link: "#Shop"
    },
    {
        id: 3,
        name: "About",
        link: "#About"
    },
    {
        id: 4,
        name: "Blogs",
        link: "#Blogs"
    }
]

const Dropdown = [
    {

        id: 1,
        name: "About",
        link: "#About"
    },
    {
        id: 2,
        name: "Shop",
        link: "#Shop"
    },
    {
        id: 3,
        name: "Contact",
        link: "#Contact"
    }
]



function NavBar() {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
            <div className='py-4'>

                <div className='container flex justify-between items-center '>

                    {/*Logo And Links Section */}
                    <div className='flex items-center gap-10'>
                        <a
                            href="#"
                            className='text-primary font-semibold 
                            tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            Eshop
                        </a>

                        {/* NavbBar Menu Section */}
                        <div className='hidden lg:block'>
                            <ul className='flex justify-between item-center gap-5'>
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link}
                                            className='inline-block px-4 font-semibold text-gray-500
                                           hover:text-black dark:hover:text-white duration-200'
                                        >
                                            {" "}
                                            {data.name}</a>
                                    </li>
                                ))}

                                {/* Dropdown */}
                                <li className='relative cursor-pointer group flex'>
                                    <a href="#"
                                        className='flex gap-[5px] font-semibold text-gray-500
                                           hover:text-black dark:hover:text-white duration-200 px-0 items-center'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </a>

                                </li>

                                {/* Dropdown Links */}

                                <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md
                                 bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white'>
                                    <ul>
                                        {Dropdown.map((data) => (
                                            <li key={data.id}>
                                                <a href={data.link}
                                                    className='block px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md'
                                                >{data.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                            </ul>
                        </div>

                    </div>

                    {/*NavBar Right Section */}

                    <div className='flex justify-between gap-4 items-center'>
                        {/* search bar section */}

                        <div className='relative group hidden sm:block'>

                            <input
                                type='text'
                                placeholder='Search'
                                className='search-bar'
                            />
                            <IoSearchSharp className='text-xl text-gray-600
                            dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:cursor-pointer' />
                        </div>

                        {/* shopping cart icons section */}
                        <button className='relative p-2'>
                            <RiShoppingCart2Fill className='w-[20px] h-[25px] text-gray-600 dark:text-gray-400 hover:cursor-pointer' />
                            <span className='absolute -top-1 -right-1 bg-primary text-white text-[12px] w-[18px] h-[18px]
                            rounded-full flex items-center justify-center'>4

                            </span>
                        </button>

                        {/* Dark mode */}

                        <div>
                            <DarkMode />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default NavBar