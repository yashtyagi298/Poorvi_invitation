import { useEffect, useState } from 'react';
import { event } from '../eventData.js';

const calculate = () => {
  const diff = Math.max(0, new Date(event.date).getTime() - Date.now());
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function Countdown() {
  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const id = window.setInterval(() => setTime(calculate()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return <div role="timer" aria-label="Time left until the wedding"><div className="countdown-grid">
    {Object.entries(time).map(([label, value]) => <div key={label} className="countdown-cell">
      <div className="countdown-value">{String(value).padStart(2, '0')}</div>
      <div className="countdown-label">{label}</div>
    </div>)}
  </div></div>;
}
