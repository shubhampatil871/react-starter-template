import React, { useEffect, useState } from "react";
import notificationsArray from "./data/data";
import Notification from "./components/Notification";

const StarterTemplateInstructions = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(notificationsArray);
  }, []);

  console.log("This is rendered this much times :", name);

  return (
    <>
      <div className="flex items-start justify-center ">
        <div className="  my-20 bg-base-300 card w-[500px] text-wrap rounded-none">
          {notifications.map((noti) => (
            <Notification
              key={noti.id}
              title={noti.title}
              message={noti.message}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StarterTemplateInstructions;
