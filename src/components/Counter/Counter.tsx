import CounterStyled from "./CounterStyled";
const Counter = (): JSX.Element => {
  return (
    <>
      <CounterStyled>
        <div className="container">
          <div className="counter">
            <span className="number">2</span>
            <span className="label">days</span>
          </div>
          <div className="counter">
            <span className="number">20</span>
            <span className="label">hours</span>
          </div>
          <div className="counter">
            <span className="number">34</span>
            <span className="label">minutes</span>
          </div>
          <div className="counter">
            <span className="number">09</span>
            <span className="label">seconds</span>
          </div>
        </div>
      </CounterStyled>
    </>
  );
};

export default Counter;
