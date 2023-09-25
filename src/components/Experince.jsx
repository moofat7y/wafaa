import React from "react";
import { BsFillLayersFill } from "react-icons/bs";
import MainHeader from "./MainHeader";
import { experince } from "../utils/helpers";

export default function Experince() {
  const experince_list = experince.map((item, index) => {
    return index % 2 === 0 ? (
      <div
        key={index}
        className="mb-8 flex justify-between items-center w-full right-timeline"
      >
        <div className="order-1 hidden md:block w-5/12"></div>
        <div className="z-20  hidden md:flex items-center order-1 bg-primary-500 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">
            {index + 1}
          </h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow-xl w-full z-10 md:w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
          <h4 className="capitalize font-semibold mb-1">{item.status}</h4>
          <h4 className="mb-1">{item.date}</h4>
          <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
            {item.desc}
          </p>
        </div>
      </div>
    ) : (
      <div
        key={index}
        className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
      >
        <div className="order-1 hidden md:block w-5/12"></div>
        <div className="z-20  hidden md:flex items-center order-1 bg-primary-500 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg">
            {index + 1}
          </h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow-xl w-full z-10 md:w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-black text-xl">{item.title}</h3>

          <h4 className="capitalize font-semibold mb-1">{item.status}</h4>
          <h4 className="mb-1">{item.date}</h4>
          <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
            {item.desc}
          </p>
        </div>
      </div>
    );
  });
  return (
    <section className="py-6">
      <MainHeader title={"Experince"} icon={<BsFillLayersFill />} />
      <div className="container">
        <div className="containe mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            {experince_list}
          </div>
        </div>
      </div>
    </section>
  );
}
