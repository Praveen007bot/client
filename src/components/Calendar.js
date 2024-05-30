import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import integrationPlugin from "@fullcalendar/interaction";
import axios from "axios";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/events",{withCredentials: true});
      console.log(response);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchEvents}>Fetch Events</button>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, integrationPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
      />
    </div>
  );
};

export default Calendar;
