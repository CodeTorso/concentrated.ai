"use client"

import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = new Date('July 20, 2024').getTime() - new Date().getTime();
    let timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); 

    return () => clearInterval(timer); 
  }, []);

  return (
      <div>
        {timeLeft.days !== undefined && (
          <div>
            <span>{timeLeft.days} days, </span>
            <span>{timeLeft.hours} hours, </span>
            <span>{timeLeft.minutes} minutes.</span>
          </div>
        )}
      </div>
  );
};

export default Countdown;
