import Image from 'next/image';

export interface CarouselItem {
    title: string;
    description: string;
    image: string;
}

const CarouselItems = ({ title, description, image }: CarouselItem) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto sm:p-10 rounded-md">
            <div className="flex flex-col sm:w-1/2 p-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-red-500 mb-4 font-semibold">Our Special Dish</h2>
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 mb-4 font-bold">{title}</h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 mb-4">{description}</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold">
                        View Details
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold">Order Now</button>
                </div>
            </div>
            <div className="sm:w-1/2 flex justify-center">
                <Image width={500} height={500} src={image} alt={title} className="rounded-md object-cover" />
            </div>
        </div>
    );
};

export default CarouselItems;
