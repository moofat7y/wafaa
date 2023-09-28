import React, { useEffect, useRef, useState } from "react";
import { navList } from "../utils/helpers";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const sideBar = useRef();
  const onClick = (e) => {
    if (sideBar.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <nav
      ref={sideBar}
      className={`fixed top-0 bg-white left-0 h-full w-[20%] min-w-[200px] max-w-[225px] z-50 shadow-md -translate-x-full duration-200 ${
        open ? "!translate-x-0" : ""
      }`}
    >
      <div className="w-full px-[30px] py-[30px] h-[200px] flex items-center justify-center bg-primary-500">
        <div className="p-[45px] text-5xl font-semibold text-center text-white border-white border-[6px]">
          W
        </div>
      </div>

      <div
        onClick={() => setOpen((prev) => !prev)}
        className="absolute  duration-200 cursor-pointer right-[-65px] top-[20px] text-black bg-primary-700/20 p-[20px] hover:bg-primary-700/50"
      >
        <div className="flex items-center justify-center">
          <AiOutlineClose
            className={`absolute text-2xl ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
          <RxHamburgerMenu
            className={`absolute text-2xl ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>

      <ul className="list-none py-[30px]">
        {navList.map((item, index) => {
          return (
            <li
              className="text-[13px] font-bold leading-[40px] mx-[30px]"
              key={index}
            >
              <a
                className="uppercase flex items-center gap-3 duration-150 hover:text-primary-500"
                href={item.id}
              >
                <span className="text-[16px]">{item.icon}</span> {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
