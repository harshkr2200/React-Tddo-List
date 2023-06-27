import React from "react";
import "./Banner.css";

function Banner() {
  let cuurentTime = new Date();
  cuurentTime = cuurentTime.getHours();
  let show = "";
  let styleCss = {};
  if (cuurentTime >= 1 && cuurentTime < 12) {
    show = "Good Morning";
    styleCss.color = "green";
  } else if (cuurentTime >= 12 && cuurentTime < 15) {
    show = "Good Afternoon";
    styleCss.color = "pink";
  } else if (cuurentTime >= 15 && cuurentTime < 19) {
    show = "Good Evening";
    styleCss.color = "yellow";
  } else if (cuurentTime >= 19 && cuurentTime <= 24) {
    show = "Good Night";
    styleCss.color = "red";
  }
  // const ampm = cuurentTime >= 12 ? "pm" : "am";

  return (
    <>
      <div className="box">
        <div className="mini_box">
          <h1>
            Hello sir, <span style={styleCss}>{show}</span>
            <p>
              The time is now {cuurentTime}:00 hours
             
            </p>
          </h1>
        </div>
      </div>
    </>
  );
}
export default Banner;
