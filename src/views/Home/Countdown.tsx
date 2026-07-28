import { useState, useEffect } from 'react';
import './Countdown.css'; // Mengimpor file CSS Countdown

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2024-04-26') - +new Date();
    let timeLeft: TimeLeft = {};

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
      {(Object.keys(timeLeft) as Array<keyof TimeLeft>).map((interval) => (
        <span key={interval} className="countdown-item">
          <span className="countdown-number">{timeLeft[interval]}</span>
          <span className="countdown-label">{interval}</span>
        </span>
      ))}
    </div>
  );
}

export default Countdown;
