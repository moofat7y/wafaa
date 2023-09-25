import React from "react";

export default function MainHeader({ title, icon }) {
  return (
    <div className="flex mb-4 items-center text-4xl justify-center gap-2">
      {icon}
      <h3 className="text-4xl uppercase font-bold">{title}</h3>
    </div>
  );
}
