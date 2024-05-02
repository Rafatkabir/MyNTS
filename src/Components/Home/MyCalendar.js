import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className='calendar-wrapper'>
      <h1
      style={{
        textAlign:"center",
        color:"#2980B9"
      }}
      >Calendar</h1>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;
