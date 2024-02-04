// Timeline.js
import React from 'react';
import './timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2 className="header-box">Formations</h2>
      </div>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-event" key={index}>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
            <div className="timeline-year">{event.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
