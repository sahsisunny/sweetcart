import React from "react";

interface CategoriesProps {
  img: string;
  title: string;
}
const CategoriesItem = ({ img, title }: CategoriesProps) => {
  return (
    <div className="category flex flex-col items-center justify-center bg-white p-5  cursor-pointer">
      <img
        src={img}
        alt="category"
        className="w-50 h-50 hover:scale-105 transition duration-400 ease-in-out object-contain ratio-1:1 rounded-lg"
      />
      <p className="text-md font-bold text-gray-800 mt-2 hover:underline">
        {title}
      </p>
    </div>
  );
};

const data = [
  {
    img: "/categories/paneer.png",
    title: "Paneer Chilli",
  },
  {
    img: "/categories/rolls.png",
    title: "Rolls",
  },
  {
    img: "/categories/menchurian.png",
    title: "Menchurian",
  },
  {
    img: "/categories/chowmein.png",
    title: "Chowmein",
  },
  {
    img: "/categories/friedrice.png",
    title: "Fried Rice",
  },
];

function Categories() {
  return (
    <section className="categories px-20 flex flex-col justify-center items-center mt-10 py-10 bg-gray-100">
      <h2
        className="text-2xl font-semibold text-gray-800 text-center"
        id="categoriesText"
      >
        Top Categories
      </h2>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {data.map((item, index) => (
          <CategoriesItem key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
