import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Typography } from '@mui/material';

const DateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
    <div style={{marginTop:"75px", marginLeft:"50px"}} >

    <Container  >
      <Typography variant="h4" gutterBottom>
        Hello DateCalendar
      </Typography>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        />
      <Typography variant="body1" gutterBottom>
        Selected Date: {selectedDate.toDateString()}
      </Typography>
    </Container>
        </div>

        </>

  );
};

export default DateCalendar;
