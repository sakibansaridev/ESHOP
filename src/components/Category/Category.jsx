import React from 'react'
import Button from '../shared/Button'
import earphone from '../../assets/earphone.png'
import Watch from '../../assets/watch.png'
import macbook from '../../assets/macbook.png'
import gaming from '../../assets/gaming-pc.png'
import speaker from '../../assets/speaker.png'
import boy from '../../assets/boy.png'




function Category() {
    return (
        <div className='py-8'>
            <div className='container'>


                {/* grid container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>


                    {/* first col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br from-black/70
                     to-black/100 text-white rounded-3xl  relative 
                     h-[320px] flex items-center'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb[2px] text-gray-400 '>
                                    Enjoy
                                </p>
                                <p className='text-2xl font-semibold mb-[2px]'>
                                    With
                                </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20
                             mb-2'>
                                    Earphone
                                </p>

                                <Button
                                    text="Browse"
                                    bgcolor="bg-primary"
                                    textcolor="text-white"
                                />
                            </div>
                        </div>
                        <img src={earphone} alt="" className='w-[270px] h-[200px] absolute top-[118px] right-[-19px]' />
                    </div>


                    {/* second col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br from-yellow-700
                     to-yellow-500/100 text-white rounded-3xl  relative 
                     h-[320px] flex items-cente'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb[2px] text-gray-400 '>
                                    Enjoy
                                </p>
                                <p className='text-2xl font-semibold mb-[2px]'>
                                    With
                                </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20
                             mb-2'>
                                    Gadget
                                </p>

                                <Button
                                    text="Browse"
                                    bgcolor="bg-primary"
                                    textcolor="text-white"
                                />
                            </div>
                        </div>
                        <img src={Watch} alt="" className=' w-[270px] h-[200px] absolute top-[88px] right-[-64px]' />
                    </div>


                    {/* third col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br pr-[208%] from-red-500/90
                     to-red-900/90 text-white rounded-3xl  relative 
                     h-[320px] flex items-center'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb[2px] text-gray-400 '>
                                    Enjoy
                                </p>
                                <p className='text-2xl font-semibold mb-[2px]'>
                                    With
                                </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20
                             mb-2'>
                                    Laptop
                                </p>

                                <Button
                                    className='mt-[52px]'
                                    text="Browse"
                                    bgcolor="bg-primary"
                                    textcolor="text-white"
                                />
                            </div>
                        </div>
                        <img src={macbook} alt="" className=' w-[240px] h-[200px] absolute bottom-0 right-[20px] top-[55px]' />
                    </div>
                </div>


                {/* grid end */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[50px]'>

                    {/* first col */}
                    <div className='  py-10 pl-5 bg-gradient-to-br pr-[208%] bg-[#CFD2D8] text-white rounded-3xl  relative 
                     h-[320px] flex items-center'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb[2px] text-gray-400 '>
                                    Enjoy
                                </p>
                                <p className='text-2xl font-semibold mb-[2px]'>
                                    With
                                </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20
                             mb-2'>
                                    Earphone
                                </p>

                                <Button
                                    text="Browse"
                                    bgcolor="bg-primary"
                                    textcolor="text-white"
                                />
                            </div>
                        </div>
                        <img src={gaming} alt="" className='w-[200px] h-[200px] absolute top-[59px] right-[20px]' />
                    </div>





                    {/* second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br bg-[#42D17D] text-white rounded-3xl  relative 
                     h-[320px] flex items-center right-[-318px]'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb[2px] text-gray-400 '>
                                    Enjoy
                                </p>
                                <p className='text-2xl font-semibold mb-[2px]'>
                                    With
                                </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20
                             mb-2'>
                                    Laptop
                                </p>

                                <Button
                                    className='mt-[52px]'
                                    text="Browse"
                                    bgcolor="bg-primary"
                                    textcolor="text-white"
                                />
                            </div>
                        </div>
                        <img src={boy} alt="" className=' w-[240px] h-[200px] absolute bottom-0 right-[5px]' />
                    </div>

                    {/* third col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br bg-[#1C7BF5] text-white rounded-3xl  relative 
                     h-[320px] flex items-cente left-[300px]'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb[2px] text-gray-400 '>
                                    Enjoy
                                </p>
                                <p className='text-2xl font-semibold mb-[2px]'>
                                    With
                                </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20
                             mb-2'>
                                    Gadget
                                </p>

                                <Button
                                    text="Browse"
                                    bgcolor="bg-primary"
                                    textcolor="text-white"
                                />
                            </div>
                        </div>
                        <img src={speaker} alt="" className=' w-[181px] h-[200px] absolute top-[121px] right-[-3px]' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category