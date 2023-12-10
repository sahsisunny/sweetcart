import Image from 'next/image';

interface CategoriesProps {
    img: string;
    title: string;
}

const CategoriesItem = ({ img, title }: CategoriesProps) => {
    return (
        <div className="category w-[200px] min-w-[250px] flex flex-col items-center justify-center bg-white p-5 cursor-pointer mx-2 hover:shadow-lg transition duration-200 ease-in-out mb-2">
            <Image
                src={img}
                width={200}
                height={200}
                alt="category"
                className="w-50 h-50 hover:scale-105 transition duration-400 ease-in-out object-contain ratio-1:1 rounded-lg"
            />
            <p className="text-md font-bold text-gray-800 mt-2 hover:underline">{title}</p>
        </div>
    );
};

export default CategoriesItem;
