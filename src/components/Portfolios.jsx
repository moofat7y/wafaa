import React from "react";
import MainHeader from "./MainHeader";
import { FaPersonRunning } from "react-icons/fa6";
import { portfoliosImages } from "../utils/helpers";

export default function Portfolios() {
  const images_list = portfoliosImages.map((item, index) => {
    return (
      <div
        key={index}
        className={`p-[2px] bg-white relative aspect-video ${
          index === 0 ? "col-span-3 mb-5" : ""
        }`}
      >
        <div className="p-[2px] relative w-full h-full">
          <img
            className="w-full h-full object-contain"
            src={item.image}
            alt=""
          />
        </div>
      </div>
    );
  });
  return (
    <section className="py-6">
      <MainHeader title={"Portfolio"} icon={<FaPersonRunning />} />
      <div className="container">
        <div className="grid grid-cols-3 gap-3">{images_list}</div>
      </div>
    </section>
  );
}
