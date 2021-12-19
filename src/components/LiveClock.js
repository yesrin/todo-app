import React from 'react';
import Clock from 'react-live-clock';
import './LiveClock.scss';

const LiveClock = () => {
  return (
    <div>
      <Clock
        className="LiveClock"
        format={'YYYY/MM/DD HH:mm:ss'}
        ticking={true}
        timezone={''}
      />
    </div>
  );
};

export default LiveClock;
