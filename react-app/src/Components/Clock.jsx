import React, { useState } from "react";
import "./Clock.css";

const Clock = () => {
  let newTime = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(newTime);

  const upDateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  return (
    <>
      <div className="clock">
        <h1 className="time">{Time}</h1>
        <br />
        <button onClick={upDateTime}>Get Time</button>
      </div>
    </>
  );
};

export default Clock;
