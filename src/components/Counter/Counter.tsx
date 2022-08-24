import { useEffect, useState } from "react";
import dateline from "../../data/date";
import CounterStyled from "./CounterStyled";

const getTimeRemaining = (dateline: Date) => {
  const total = dateline.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const Counter = (): JSX.Element => {
  const initialTime = {
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [dateState, setDateState] = useState(initialTime);

  useEffect(() => {
    setInterval(() => {
      setDateState(getTimeRemaining(dateline));
    }, 1000);
  }, []);

  return (
    <>
      <CounterStyled>
        <div className="container">
          <div className="counter">
            <span className="counter__number">{dateState.days}</span>
            <span className="counter__label">days</span>
          </div>
          <div className="counter">
            <span className="counter__number">{dateState.hours}</span>
            <span className="counter__label">hours</span>
          </div>
          <div className="counter">
            <span className="counter__number">{dateState.minutes}</span>
            <span className="counter__label">minutes</span>
          </div>
          <div className="counter">
            <span className="counter__number">{dateState.seconds}</span>
            <span className="counter__label">seconds</span>
          </div>
        </div>
      </CounterStyled>
    </>
  );
};

export default Counter;
