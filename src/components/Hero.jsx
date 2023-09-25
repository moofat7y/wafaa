import React from "react";
import profile from "/main-profile.png";
import { contactData, contactIcons } from "../utils/helpers";
export default function Hero() {
  return (
    <section className="hero">
      <div className="banner"></div>
      <section className="py-6">
        <div className="container">
          <div className="relative flex w-full -mt-[190px]">
            <div className="w-full text-center md:text-start  pt-[60px] pb-[40px] px-[40px] text-white z-[20] bg-primary-500 relative before:hidden md:before:block before:-z-[1] before:content-[''] before:absolute before:right-[-36px] before:top-0 before:w-[150px] before:h-full before:bg-primary-500 before:skew-x-[10deg]">
              <h4 className="uppercase text-2xl font-bold">Wafaa Almadhoun</h4>
              <h4 className="capitalize text-lg mb-3">
                Full stack Robotics engineer
              </h4>

              <ul className="mb-4 list-none flex flex-col gap-3">
                {contactData.map((item, index) => {
                  return (
                    <li
                      className="flex justify-center md:justify-start items-center gap-2"
                      key={index}
                    >
                      {item.href ? (
                        <a
                          target="_blank"
                          className="flex items-center gap-2"
                          href={item.href}
                        >
                          {item.icon} {item.text}
                        </a>
                      ) : (
                        <>
                          {/* // <li className="flex items-center gap-2" key={index}> */}
                          {item.icon} {item.text}
                          {/* // </li> */}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>

              <ul className="list-none justify-center md:justify-start flex gap-3">
                {contactIcons.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`flex  items-center gap-2 p-3 rounded-full text-white ${item.color}`}
                    >
                      <a target="_blank" href={item.href}>
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="absolute rounded-full md:rounded-none overflow-hidden top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:static w-[120px] h-[120px] md:h-[350px] flex-shrink-0 md:w-[350px] z-20 md:z-0">
              <img src={profile} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div
            style={{
              boxShadow:
                "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
            }}
            className=""
          >
            <div className="p-[40px]">
              <p className="text-[15px] font-extralight text-center">
                Hello, I'm Wafaa Almadhoun, a dedicated Computer Engineering
                graduate with a Bachelor's degree . With a proven track record
                of success, I have excelled in various roles and training
                programs, including serving as the best Training Supervisor
                during the summer at Smart Methods Company in 2023 and being
                recognised as the best Intern Engineer in all branches during my
                fullstack Robotics engineering training at the same company in
                2022. My commitment to excellence extends to my current position
                in Digital Marketing at Mall of Saudi Arabia Company since
                September 2020.Frequently praised as efficient by my peers, I
                can be relied on to help your company achieve its goals.
              </p>
            </div>
            <div className="p-[20px] border-t">
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="./CV.rar"
                  download
                  className="bg-primary-500 text-center uppercase text-white py-1 px-6"
                >
                  Download Cv
                </a>
                <a
                  href="#contact"
                  className="bg-primary-500 text-center uppercase text-white py-1 px-6"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
