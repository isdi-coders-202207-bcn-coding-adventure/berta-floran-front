import { useState } from "react";
import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  interface ICountDown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  const initialTime: ICountDown = {
    days: 31,
    hours: 24,
    minutes: 60,
    seconds: 60,
  };
  const [state, setState] = useState<ICountDown>(initialTime);

  setInterval(() => {
    const date = new Date();
    const newDate: ICountDown = {
      days: initialTime.days - date.getDay(),
      hours: initialTime.hours - date.getHours(),
      minutes: initialTime.minutes - date.getMinutes(),
      seconds: initialTime.seconds - date.getSeconds(),
    };
    setState(newDate);
  }, 1000);

  return (
    <>
      <CounterStyled>
        <div className="container">
          <div className="counter">
            <span className="counter__number">{state.days}</span>
            <span className="counter__label">days</span>
          </div>
          <div className="counter">
            <span className="counter__number">{state.hours}</span>
            <span className="counter__label">hours</span>
          </div>
          <div className="counter">
            <span className="counter__number">{state.minutes}</span>
            <span className="counter__label">minutes</span>
          </div>
          <div className="counter">
            <span className="counter__number">{state.seconds}</span>
            <span className="counter__label">seconds</span>
          </div>
        </div>
      </CounterStyled>
    </>
  );
};

export default Counter;
