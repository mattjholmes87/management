import React, { useState } from "react";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";

const AddTodoOverview = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="innerBox nine">
        <div className="addTodoWindow wrapper">
          Add a Todo
          <Input
            name={"name"}
            type={"text"}
            prefix={"Title"}
            placeholder={"Enter a name for your Todo"}
          />
          <Input
            name={"body"}
            type={"text"}
            prefix={"Details"}
            placeholder={"Add the details of your todo"}
          />
          Priority Task:
          <select className="priorityDropDown" name="priority">
            <option selected value="0">
              No
            </option>
            <option value="1">Yes</option>
          </select>
          Category:
          <select className="priorityDropDown" name="priority">
            <option selected value="0">
              No category
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          Due Date:{" "}
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {console.log(startDate)}
          <div className="calendarWrap" id="calendarWrap"></div>
        </div>
      </div>
    </>
  );
};

export default AddTodoOverview;
