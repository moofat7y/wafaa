import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { FaPersonRunning } from "react-icons/fa6";
import { portfoliosImages } from "../utils/helpers";
import Modal from "./Modal";

const filters = [
  "mechanical department",
  "electronics department",
  "Ros And AI department",
  "Iot department",
];

export default function Portfolios() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [showImage, setShowImage] = useState(null);
  const [open, setOpen] = useState(null);

  const images_list = portfoliosImages.map((item, index) => {
    return (
      <div key={index} className={`p-[2px]`}>
        <p
          style={{
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
          }}
          data-aos="fade-right"
          className="text-sm mb-4 p-3 text-center"
        >
          {item.desc}
        </p>

        <div
          style={{ gridAutoRows: "230px" }}
          className="grid gap-4 grid-cols-3"
        >
          {item.images.map((img, index) => {
            return (
              <div
                onClick={() => {
                  setOpen(true);
                  setShowImage(img);
                }}
                data-aos={index % 2 === 0 ? "zoom-in-up" : "fade-left"}
                key={index + "img"}
                className={`relative overflow-hidden w-full group p-1 bg-white before:content-[""] before:absolute before:duration-500 before:ease-in-out before:bg-[#0000006f] before:z-10 ${
                  item.images.length === 1
                    ? "col-span-3 md:col-span-1 md:col-start-2 md:col-end-3 before:inset-0 before:opacity-0 hover:before:opacity-100"
                    : index === 0
                    ? "col-span-3 md:col-span-2 row-span-1 md:row-span-2 before:inset-0 before:opacity-0 hover:before:opacity-100 "
                    : "col-span-3 md:col-span-1 before:left-0 before:bottom-0 before:w-full before:h-[50%] before:opacity-0 hover:before:h-full hover:before:opacity-100"
                }`}
              >
                <img
                  src={img}
                  loading="lazy"
                  className="w-full duration-500 ease-in-out group-hover:scale-[1.2] h-full object-cover"
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
          <ul className="flex-nowrap w-full md:justify-center list-none cursor-pointer flex items-center gap-4">
            {filters.map((item, index) => {
              return (
                <li
                  onClick={() => setActiveFilter(index)}
                  key={index}
                  className={`py-2 uppercase text-sm whitespace-nowrap text-primary-300 border-b-4 border-transparent duration-200 ${
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

      <Modal image={showImage} open={open} setOpen={setOpen} />
    </section>
  );
}
