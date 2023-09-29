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
      <div key={index} className={`p-[2px]`}>
        <p data-aos="fade-right" className="text-sm mb-4">
          {item.desc}
        </p>

        <div className="grid gap-4 grid-cols-3">
          {item.images.map((img, index) => {
            return (
              <div
                data-aos={index % 2 === 0 ? "zoom-in-up" : "fade-left"}
                key={index + "img"}
                className={`relative ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <section id="portfolio" className="py-6 overflow-hidden">
      <MainHeader title={"Portfolio"} icon={<FaPersonRunning />} />
      <div className="container">
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
        <div className="">{images_list[activeFilter]}</div>
      </div>
    </section>
  );
}
