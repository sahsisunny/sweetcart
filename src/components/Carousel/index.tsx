import CarouselItems from './CarouselItems';
import { useState, useEffect } from 'react';
import { CarouselItem } from './CarouselItems';

interface CarouselProps {
    items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [items.length]);

    return (
        <div className="w-full overflow-hidden sm:mt-4">
            <div
                className="flex transition-transform ease-in-out duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-screen">
                        <CarouselItems title={item.title} description={item.description} image={item.image} />
                    </div>
                ))}
            </div>
            <div className="relative top-[-2rem] left-0 flex justify-center mt-4">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full bg-gray-500 cursor-pointer mx-2 ${
                            index === activeIndex ? 'bg-gray-800' : ''
                        }`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
