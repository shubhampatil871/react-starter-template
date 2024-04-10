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
        <div
          className={`bg-blue-300 border border-blue-400 text-black px-2 py-1 m-1 rounded-xl relative`}
          role="alert"
        >
          <p className="font-bold text-start">{title}</p>
          <span className="absolute top-0 bottom-0 right-0 px-1 py-3 ">
            <img
              src={close}
              alt="Vite logo"
              className="justify-end"
              width={30}
              height={50}
              onClick={handleClose}
            />
          </span>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
    </>
  );
};

export default Notification;
