import CategoriesItem from '@/components/Categories/CategoriesItem';
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";

const data = [
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
    },
    {
        img: '/categories/paneer.png',
        title: 'Paneer Chilli',
    },
    {
        img: '/categories/rolls.png',
        title: 'Rolls',
    },
    {
        img: '/categories/menchurian.png',
        title: 'Menchurian',
    },
    {
        img: '/categories/chowmein.png',
        title: 'Chowmein',
    },
    {
        img: '/categories/friedrice.png',
        title: 'Fried Rice',
    },
];

const Categories = () => {
    return (
        <section className="w-screen flex flex-col justify-center items-center bg-gray-100  py-10">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-5">Top Categories</h2>
            <div
                className="sm:w-[90vw] w-screen
      flex flex-row items-center  overflow-x-scroll no-scrollbar"
            >
                {/* <div 
        className="p-4 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer absolute left-0 ml-20 z-10 ">
          <FaAngleLeft className="text-2xl text-gray-800" />
        </div> */}
                {data.map((item, index) => (
                    <CategoriesItem key={index} img={item.img} title={item.title} />
                ))}
                {/* <div className="p-4 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer absolute right-0 mr-20 z-10">
          <FaAngleRight className="text-2xl text-gray-800" />
        </div> */}
            </div>
        </section>
    );
};

export default Categories;
