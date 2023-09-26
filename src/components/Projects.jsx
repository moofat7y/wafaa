import React from "react";
import MainHeader from "./MainHeader";
import { CgListTree } from "react-icons/cg";
import { projects } from "../utils/helpers";
export default function Projects() {
  const project_list = projects.map((proj, index) => {
    return (
      <div
        key={index}
        data-aos="fade-up"
        className="box p-5 bg-white shadow-sm border duration-300 text-center"
      >
        <h4
          className="date mb-5 w-fit mx-auto border px-2 rounded-2xl bg-primary-500 text-white"
          data-text="date_service_4"
        >
          {proj.date}
        </h4>
        <p
          className="text-[#3A3939] text-lg font-semibold"
          data-text="info_service_4"
        >
          {proj.title}
        </p>
      </div>
    );
  });

  return (
    <section id="projects" className="py-6">
      <MainHeader title={"Projects"} icon={<CgListTree />} />
      <div className="container">
        <div className="row grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-10">
          {project_list}
        </div>
      </div>
    </section>
  );
}
