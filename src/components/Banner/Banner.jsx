import React from 'react'

const Banner = ({ data }) => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12'>
            <div className='container' >
                <div
                    style={{ backgroundColor: data.bgColor }}
                    className=' grid grid-cols-1 md:grid-cols-3  
                gap-6 items-center text-white rounded-3xl'>
                    {/* first coloum */}
                    <div className='p-6 sm:p-12'>
                        <p className='text-sm sm:text-base'>{data.discount}</p>
                        <h1 className='uppercase text-4xl lg:tet-7xl font-bold'>
                            {""}
                            {data.title}</h1>
                        <p className='text-sm'>{data.date}</p>
                    </div>
                    {/* second coloum */}
                    <div className='h-full flex items-center'>
                        <img
                            src={data.image}
                            alt="class"
                            className="scale-125 w-[250px] md:w[340px] mx-auto drop-shadow-2xl object-cover " />
                    </div>
                    {/* thired coloum */}
                    <div className='flex flex-col justify-center gap-4 p-6 sm:p-8' >
                        <p className='font-bold text-xl'>{data.title2}</p>
                        <p className='text-3xl sm:text-5xl font-bold '>{data.title3}</p>
                        <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
                        <button
                            style={{ color: data.bgColor || data.bgcolor }}
                            className='bg-white py-3 px-4 rounded-full text-[red] pad'
                        >
                            Shop Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner