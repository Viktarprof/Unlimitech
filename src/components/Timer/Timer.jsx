import React from "react";
import s from "./Timer.module.css";
import { useState, useEffect } from "react";

function Timer() {
    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 1);
    targetTime.setHours(targetTime.getHours() + 11);
    targetTime.setMinutes(targetTime.getMinutes() + 51);
    targetTime.setSeconds(targetTime.getSeconds() + 23);
  
    const calculateTime = () => {
      const difference = +targetTime - +new Date();
      let time = {};
  
      if (difference > 0) {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  
        time = {
          days,
          hours,
          minutes,
          seconds,
        };
      }
      return time;
    };
  
    const [time, setTime] = useState(calculateTime());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(calculateTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatTime = (time) => {
      return time < 10 ? `${time}` : time;
    };
  
    const { days, hours, minutes, seconds } = time;
  
    return (
      <div className={s.timerContainer}>
        <p className={s.time}>SPIESZ SIĘ:</p>
        <p className={s.time}><span>{formatTime(days)}</span> DNI </p>
        <p className={s.time}><span>{formatTime(hours)}</span> GODZ. </p>
        <p className={s.time}><span>{formatTime(minutes)}</span> MIN. </p>
        <p className={s.time}><span>{formatTime(seconds)}</span> SEK. </p>
      </div>
    );
  }
  
  export default Timer;