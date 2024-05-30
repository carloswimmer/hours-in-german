import { useEffect, useRef, useState } from 'react';
import './Digits.css';
import { useDisplay } from '../../../hooks/useDisplay';

export const Digits = () => {
  const {
    hours: { value: randomHour },
    minutes: { value: randomMinute },
  } = useDisplay();
  const [displayedHour, setDisplayedHour] = useState(randomHour);
  const [displayedMinute, setDisplayedMinute] = useState(randomMinute);
  const prevHour = useRef(randomHour);
  const prevMinute = useRef(randomMinute);

  useEffect(() => {
    const hourOrder = randomHour > prevHour.current ? 1 : -1;
    const minuteOrder = randomMinute > prevMinute.current ? 5 : -5;

    const hourInterval = setInterval(() => {
      const hours = prevHour.current + hourOrder;
      if (hourOrder > 0 ? hours <= randomHour : hours >= randomHour) {
        prevHour.current = hours;
        setDisplayedHour(hours);
      }
    }, 80);

    const minuteInterval = setInterval(() => {
      const minutes = prevMinute.current + minuteOrder;
      if (minuteOrder > 0 ? minutes <= randomMinute : minutes >= randomMinute) {
        prevMinute.current = minutes;
        setDisplayedMinute(minutes);
      }
    }, 60);

    return () => {
      clearInterval(hourInterval);
      clearInterval(minuteInterval);
    };
  }, [randomHour, randomMinute]);

  return (
    <div className="digits">
      <p className="hours">{formatNumber(displayedHour)}</p>
      <p className="points">:</p>
      <p className="minutes">{formatNumber(displayedMinute)}</p>
    </div>
  );
};

const formatNumber = (number: number) => {
  return number < 10 ? `0${number}` : number;
};
