import { cardCatList } from "@/consts/lists";
import React from "react";

function CategoriesCard() {
  return (
    <div className=" mt-4 container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {cardCatList.map((cat, index) => (
        <div
          key={index}
          className="relative h-72 transform
                        transition-transform duration-300 hover:scale-105"
        >
          <img
            src={cat.imageUrl}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{cat.title}</p>
            <p className="text-gray-900 underline cursor-pointer">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoriesCard;
