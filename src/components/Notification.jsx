import React, { useState } from "react";
import close from "../assets/close.svg";
// import reactLogo from "./assets/react.svg";

const Notification = ({ title, message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="bg-gray-950 px-4 py-2 outline outline-1  ">
          <p className="font-semibold text-slate-100 items-start">{title}</p>
          <div className="flex items-center justify-between ">
            <p className="block sm:inline text-slate-400">{message}</p>
            <span className="">
              <img
                src={close}
                alt="Vite logo"
                className="cursor-pointer"
                width={30}
                height={50}
                onClick={handleClose}
              />
            </span>
          </div>
        </div>

        // <div
        //   className={`bg-blue-300 border border-blue-400 text-black px-2 py-1 m-1 rounded-xl relative`}
        //   role="alert"
        // >
        //   <p className="font-bold text-start text-gray-800">{title}</p>
        //   <span className="absolute top-0 bottom-0 right-0 px-1 py-3 ">
        //     <img
        //       src={close}
        //       alt="Vite logo"
        //       className="justify-end"
        //       width={30}
        //       height={50}
        //       onClick={handleClose}
        //     />
        //   </span>
        //   <span className="block sm:inline text-gray-700">{message}</span>
        // </div>
      )}
    </>
  );
};

export default Notification;
