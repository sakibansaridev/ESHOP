import React from 'react'
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import macbook from '../../assets/macbook.png'
import headphones from '../../assets/headphone.png'
import smartWatch from '../../assets/boy.png'
import Button from '../shared/Button'

let Slider = SliderModule;
while (typeof Slider !== "function" && Slider && Slider.default) {
    Slider = Slider.default;
}

const HeroDate = [
    {
        id: 1,
        image: headphones,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        image: smartWatch,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        image: macbook,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Laptop",
    },
];

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
    };

    return (
        <div className='container'>
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
                <div className='container w-full pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {HeroDate.map((item) => (
                            <div key={item.id}>
                                {/* yahan grid classes — slick isko touch nahi karega */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center w-full">
                                    {/* text content section */}
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 className='text-2xl sm:text-3xl font-bold'>{item.subtitle}</h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                                        <h1 className='text-5xl uppercase text-white dark:text-gray-200/30 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{item.title2}</h1>
                                        <div>
                                            <Button
                                                text="Shop Now"
                                                bgcolor="bg-primary"
                                                textcolor="text-white"
                                            />
                                        </div>
                                    </div>
                                    {/* images section */}
                                    <div className="order-1 sm:order-2">
                                        <img src={item.image} alt=""
                                            className="w-[250px] sm:w-[400px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;