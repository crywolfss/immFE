import React from 'react';
import { Calendar, Whisper, Popover } from 'rsuite';
import 'rsuite/Calendar/styles/index.css';
import './CalendarStyles.css';

// Function to get attendance data for a given date
function getAttendanceData(date) {
  const day = date.getDate();

  switch (day) {
    case 1:
      return ['Present'];
    case 2:
      return ['Sick Leave'];
    case 3:
      return ['Holiday'];
    default:
      return [];
  }
}

// DataCalendar component
export const DataCalendar = () => {
  // Function to render custom content in the calendar cells
  function renderCell(date) {
    const attendanceStatuses = getAttendanceData(date);
    const displayList = attendanceStatuses.slice(0, 2);

    if (attendanceStatuses.length) {
      const moreCount = attendanceStatuses.length - displayList.length;
      const moreItem = (
        <li key="more">
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {attendanceStatuses.map((status, index) => (
                  <p key={index}>{status}</p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-attendance-list">
          {displayList.map((status, index) => (
            <li key={index} className={`attendance-status ${status.replace(' ', '-').toLowerCase()}`}>
              {status}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return <Calendar bordered renderCell={renderCell} />;
};
