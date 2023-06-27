import React, { useState } from "react";

const Digital = () => {
  let newTime = new Date().toLocaleTimeString();
  let [Time, setTime] = useState(newTime);
  // const update = () => {

  // };
  const repet = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(repet, 0);

  return (
    <>
      <h1 className="time">{Time}</h1>
      {/* <button>Stop Watch</button> */}
    </>
  );
};
export default Digital;
