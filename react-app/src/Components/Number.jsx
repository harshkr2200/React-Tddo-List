import React, { useState } from "react";
import "./Number.css";
const Number = () => {
  let [count, setCount] = useState(0);
  const AddOne = () => {
    setCount(count++);
  };
  let MinsOne = () => {
    setCount(count--);
  };
  return (
    <>
      <div className="number_box">
        <span>
          <h1>{count}</h1>
          <button onClick={AddOne}>Click Me for Add one</button>
          <button onClick={MinsOne}>Click Me for less one</button>
        </span>
      </div>
    </>
  );
};
export default Number;
