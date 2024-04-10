import React, { useEffect, useState } from "react";
import notifications from "./data/data";
import Notification from "./components/Notification";

const StarterTemplateInstructions = () => {
  const [name, setName] = useState("");

  useEffect(() => {});

  function handleChange(e) {
    setName(e.target.value);
  }
  console.log("This is rendered this much times :", name);

  return (
    <>
      <div className="flex items-start justify-center ">
        <div className="px-3 py-2 my-20 bg-base-300 card w-[500px] text-wrap">
          <div className="  text-center text-2xl font-semibold">
            Notifications
          </div>
          {notifications.map((noti, index) => (
            <Notification key={noti.id} title={noti.title} message={noti.message} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StarterTemplateInstructions;
