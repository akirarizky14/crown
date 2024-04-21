import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Mengimpor file CSS Countdown

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-04-26') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).map((interval) => (
        <span key={interval} className="countdown-item">
          <span className="countdown-number">{timeLeft[interval]}</span>
          <span className="countdown-label">{interval}</span>
        </span>
      ))}
    </div>
  );
}

export default Countdown;
