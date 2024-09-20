import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment);
import { Link } from 'react-router-dom';
const FullCalendar = () => {
    const events = [
        {
            title: 'Meeting',
            allDay: false,
            start: new Date(2024, 8, 13, 10, 0), 
            end: new Date(2024, 8, 13, 12, 0),   
        },
        {
            title: 'Lunch Break',
            start: new Date(2024, 8, 13, 12, 0), 
            end: new Date(2024, 8, 13, 13, 0),
        },
    ];

    return (
        <div className='calendar'>
            <h1>My Calendar</h1>
            <Link>Home</Link> /
            <Link>Plugins</Link>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                className='calendar_body'
            />
        </div>
    );
};

export default FullCalendar;
