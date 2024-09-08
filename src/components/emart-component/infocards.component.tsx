
import { cardInfoList } from "@/consts/emart/lists";
import React from "react";

function InfoCards() {
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
        {cardInfoList.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center 
                    text-center
                     p-4 border rounded-lg shadow-md
                     transform transition-transform duration-300
                      hover:scale-125 hover:shadow-lg hover:bg-red-300
                      cursor-pointer"
          >
            <div className="text-4xl text-red-500">{card.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCards;
