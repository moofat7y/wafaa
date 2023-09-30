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
              <div className="flex mb-1  items-center justify-center">
                <span className="">{skill.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <section id="skills" className="py-6">
      <MainHeader title={"Skills"} icon={<IoOptions />} />
      <div className="container">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="p-[40px] bg-primary-500 text-white"
        >
          <div className="grid justify-center grid-cols-1 lg:grid-cols-3 gap-8">
            {skill_list}
          </div>
        </div>
      </div>
    </section>
  );
}
