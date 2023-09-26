import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { FaPersonRunning } from "react-icons/fa6";
import { portfoliosImages } from "../utils/helpers";

const filters = [
  "electronics departmen",
  "mechanical department",
  "department AI and Ros",
  "Iot department",
];

export default function Portfolios() {
  const [activeFilter, setActiveFilter] = useState(0);
  const images_list = portfoliosImages.map((item, index) => {
    return (
      <div key={index} className={`p-[2px] bg-white relative aspect-video`}>
        <div className="p-[2px] relative w-full h-full">
          <img
            loading="lazy"
            className="w-full h-full object-contain"
            src={item.image}
            alt=""
          />
        </div>
      </div>
    );
  });
  return (
    <section id="portfolio" className="py-6">
      <MainHeader title={"Portfolio"} icon={<FaPersonRunning />} />
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="container"
      >
        <div
          id="filters"
          className="filters overflow-x-auto flex justify-center mb-4"
        >
          <ul className="flex-nowrap list-none cursor-pointer flex items-center gap-4">
            {filters.map((item, index) => {
              return (
                <li
                  onClick={() => setActiveFilter(index)}
                  key={index}
                  className={`py-2 uppercase whitespace-nowrap text-primary-300 border-b-4 border-transparent duration-200 ${
                    index === activeFilter ? "!border-primary-500" : ""
                  }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {images_list[activeFilter]}
        </div>
      </div>
    </section>
  );
}
