import React from 'react'

const Footer = () => {
    return (
        <div className='dark:bg-gray-950 '>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* company detsila */}
                    <div className="py-8 px-4">
                        <a href="#" className='text-primary font-semibold 
                        tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            Eshop
                        </a>
                        <p className="text-gray-600 lg:pr-24 pt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus repudiandae
                            recusandae illum accusamus ullam
                            autem explicabo, modi obcaecati pariatur!
                        </p>
                        <p className='text-gray-500 mt-4 '>
                            Made with by The Coding Journery
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer