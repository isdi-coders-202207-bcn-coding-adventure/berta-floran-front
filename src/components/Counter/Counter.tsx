import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  return (
    <>
      <CounterStyled>
        <div className="container">
          <div className="counter">
            <span className="counter__number">02</span>
            <span className="counter__label">days</span>
          </div>
          <div className="counter">
            <span className="counter__number">20</span>
            <span className="counter__label">hours</span>
          </div>
          <div className="counter">
            <span className="counter__number">34</span>
            <span className="counter__label">minutes</span>
          </div>
          <div className="counter">
            <span className="counter__number">09</span>
            <span className="counter__label">seconds</span>
          </div>
        </div>
      </CounterStyled>
    </>
  );
};

export default Counter;
