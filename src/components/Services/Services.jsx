import React from 'react'
import {
    FaCarSide,
    FaCheckCircle,
    FaWallet,
    FaHeadphones
} from 'react-icons/fa'

const serviceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: 'Free Shipping',
        description: 'Free Shipping on all orders'
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: 'Verified Products',
        description: '100% Verified Products'
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: 'Easy Returns',
        description: 'Easy Returns within 30 days'
    },
    {
        id: 4,
        icon: <FaHeadphones className='text-4xl md:text-5xl text-primary' />,
        title: '24/7 Support',
        description: '24/7 Customer Support'
    }
]

function Services() {
    return (
        <div className='container mt-14 md:py-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {serviceData.map((data) => (
                    <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'>
                        {data.icon}
                        <div>
                            <h1 className='lg:text-xl font-bold'>
                                {data.title}
                            </h1>
                            <h1 className='text-gray-400 text-sm '>
                                {data.description}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
