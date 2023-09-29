import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
const Modal = ({ image, open, setOpen }) => {
  const modalRef = useRef();
  const handleBgClick = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    } else {
      setOpen(false);
    }
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      onClick={(e) => handleBgClick(e)}
      className="fixed top-0 left-0 h-screen w-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        ref={modalRef}
        className="relative w-full h-full md:w-[50%] md:h-[50%]"
      >
        <AiOutlineClose
          onClick={() => setOpen(false)}
          className="text-white top-2 right-2 absolute"
        />
        <img className="w-full h-full object-contain" src={image} alt="" />
      </div>
    </div>,
    document.getElementById("models")
  );
};

export default Modal;
