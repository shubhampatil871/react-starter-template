import React, { useEffect, useState } from "react";

const StarterTemplateInstructions = () => {
  const [name, setName] = useState("");

  useEffect(() => {});

  function handleChange(e) {
    setName(e.target.value);
  }
  console.log("This is rendered this much times :", name);

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="p-4 m-40 bg-base-300 card">
          <div className="flex-wrap font-mono text-2xl font-semibold flex-grow-1 flex-shrink-1 text-center-">
            Hello I'm {name}
          </div>
          <div className="card-body">
            {/* <label htmlFor="name">enter name</label> */}
            <input className="input " value={name} onChange={handleChange} />
            <button className="m-4 btn btn-accent">Set Name</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarterTemplateInstructions;
