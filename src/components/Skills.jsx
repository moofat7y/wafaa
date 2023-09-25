import React from "react";
import MainHeader from "./MainHeader";
import { IoOptions } from "react-icons/io5";
import { skills } from "../utils/helpers";

export default function Skills() {
  const skill_list = skills.map((item, index) => {
    return (
      <div key={index}>
        <h4 className="text-white text-center text-lg mb-2 font-semibold">
          {item.title}
        </h4>
        <ul className="list-none flex flex-col gap-2">
          {item.skills.map((skill, index) => (
            <li key={skill.label}>
              <div className="flex mb-1 items-center justify-between">
                <span>{skill.label}</span>
                <span>{skill.prec} %</span>
              </div>
              <div className="bg-primary-700 h-[4px] relative w-full">
                <div
                  style={{ width: `${skill.prec}%` }}
                  className="bg-white absolute left-0 top-0 h-full"
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <section className="py-6">
      <MainHeader title={"Skills"} icon={<IoOptions />} />
      <div className="container">
        <div className="p-[40px] bg-primary-500 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skill_list}
          </div>
        </div>
      </div>
    </section>
  );
}
