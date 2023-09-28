import React from "react";
import MainHeader from "./MainHeader";
import { GoGoal } from "react-icons/go";

export default function Goals() {
  return (
    <section className="py-6">
      <MainHeader title={"Goals"} icon={<GoGoal />} />
      <div className="container">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          style={{
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
          }}
        >
          <div className="p-[40px]">
            <p className="text-[15px] font-extralight text-center">
              I hold a profound admiration and loyalty for Smart Methods Company
              and extend a warm embrace to the prospect of serving as a trainer
              . This aspiration is rooted in my prior ardor for the realm of
              academic pedagogy. The opportunity to impart knowledge in such an
              esteemed establishment is of considerable significance to me.
              Smart Methods, as a specialised entity with a promising
              trajectory, ensures a perpetuation of my active involvement in the
              ever-evolving domain of robotics.
              <br />
              <br /> In addition to my dedication to the field of robotics, my
              fervors for industrial and product design is resolute. Thus, I
              stand ready with pride at the prospect of joining your highly
              motivated team, driven by a commitment to professional advancement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
