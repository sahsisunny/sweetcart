import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

interface CategoriesProps {
  img: string;
  title: string;
  subtitle?: string;
  addToCart?: () => void;
  removeFromCart?: () => void;
  rating?: number;
  price?: number;
  offer?: number;
}

const ProductItem = ({ img, title, subtitle, price }: CategoriesProps) => {
  return (
   
      <div className="relative w-full sm:w-80 rounded-[1rem] p-4 m-4 shadow-lg transition-all duration-500 ease-in-out">
        <div className="mb-4 relative rounded-tr-[4rem] rounded-[0.7rem]">
          <img
            src={img}
            alt="product"
            className="w-full h-full object-cover rounded-[inherit]"
          />

          <div className="absolute bottom-[-1rem] right-0 text-black font-black p-2 rounded-[1rem_1rem_2rem_2rem]  bg-yellow-400">
            ₹{price}
          </div>
        </div>
        <label className="absolute top-2 right-4 text-2xl cursor-pointer">
          <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
          <GrFavorite />
        </label>

        <div className=" mb-4 ">
          <div className="font-black	 ">{title}</div>
          <div className="font-bold	mb-1 text-sm text-gray-600">{subtitle}</div>
        </div>

        <div className="flex justify-between items-center">
          <button
            className="   font-black cursor-pointer px-0 py-2 rounded-[1.4rem_1.4rem_0.7rem_0.7rem] border-[none] text-black bg-yellow-400 flex justify-center items-center hover:bg-yellow-500 transition-all duration-500 ease-in-out w-[70%] mr-2
          "
          >
            Buy Now
          </button>
          <button className="rounded-[1.4rem_1.4rem_0.7rem_0.7rem]  px-2 py-3 border-[none] flex justify-center items-center text-black bg-yellow-400 hover:bg-yellow-500 transition-all duration-500 ease-in-out w-[30%]">
            <FaCartPlus />
          </button>
        </div>
      </div>

  );
};

const data = [
  {
    img: "/categories/paneer.png",
    title: "Paneer Chilli",
    subtitle: "Paneer Chilli with Rice",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/rolls.png",
    title: "Rolls",
    subtitle: "Egg Rolls with extra cheese",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/menchurian.png",
    title: "Menchurian",
    subtitle: "Menchurian with tasty sauce",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/chowmein.png",
    title: "Chowmein",
    subtitle: "Chowmein with extra cheese",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/friedrice.png",
    title: "Fried Rice",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/paneer.png",
    title: "Paneer Chilli",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/rolls.png",
    title: "Rolls",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/menchurian.png",
    title: "Menchurian",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/chowmein.png",
    title: "Chowmein",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
  {
    img: "/categories/friedrice.png",
    title: "Fried Rice",
    quantity: 5,
    rating: 4.5,
    price: 29.99,
    offer: 10,
  },
];

const Product = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-5">
        Top Categories
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {data.map((item, index) => (
          <ProductItem
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
