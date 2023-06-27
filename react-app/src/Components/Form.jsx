import React, { useState } from "react";
import "./Form.css";
import Digital from "./Digital";

const From = () => {
  const [FullName, setFullname] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFullname((pervalue) => {
      return {
        ...pervalue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: pervalue.lname,
      //     email: pervalue.email,
      //     number: pervalue.number,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     lname: value,
      //     fname: pervalue.fname,
      //     email: pervalue.email,
      //     number: pervalue.number,
      //   };
      // } else if (name === "email") {
      //   return {
      //     email: value,
      //     fname: pervalue.fname,
      //     lname: pervalue.lname,
      //     number: pervalue.number,
      //   };
      // } else if (name === "number") {
      //   return {
      //     number: value,
      //     fname: pervalue.fname,
      //     lname: pervalue.lname,
      //     email: pervalue.email,
      //   };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Your from submit and save in database");
  };

  return (
    <>
      <div className="from_div">
        <form onSubmit={onSubmits}>
          <Digital />
          <h1>
            Hello:{FullName.fname} {FullName.lname}
          </h1>
          <h4> Email:{FullName.email} </h4>
          <h5> Number:{FullName.number}</h5>
          <input
            type="text"
            placeholder="Enter First Your Name"
            name="fname"
            value={FullName.fname}
            onChange={InputEvent}
          />

          <input
            type="text"
            placeholder="Enter Last Your Name"
            name="lname"
            value={FullName.lname}
            onChange={InputEvent}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={FullName.email}
            onChange={InputEvent}
          />

          <input
            type="text"
            placeholder="Enter You Number"
            name="number"
            value={FullName.number}
            onChange={InputEvent}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default From;
