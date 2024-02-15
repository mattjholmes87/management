import React from "react";
import moment from "moment";

const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let month = moment().format("MMMM");
  let year = moment().format("YYYY");
  let today = moment().format("dddd");

  return (
    <>
      <div className="intro">{month}</div>
      <div>{year}</div>
      <div>{today}</div>
      <div className="daysBox">
        {days.map((day) => {
          return (
            <div className="day">
              <p> </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calendar;
