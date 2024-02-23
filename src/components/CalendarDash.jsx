import React from "react";
import moment from "moment";
import { headerMaker } from "../tools/HeaderMaker";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);
const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
];

const CalendarDash = () => {
  return (
    <>
      <div className="calendarWrap">
        {headerMaker("calendar")}
        {headerMaker("dash")}
        <div>
          <DnDCalendar
            localizer={localizer}
            events={myEventsList}
            draggableAccessor={(event) => true}
            style={{ width: "50vw", height: "50vh" }}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarDash;
