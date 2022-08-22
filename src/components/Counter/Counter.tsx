const Counter = (): JSX.Element => {
  return (
    <>
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
          <span className="conter__label">seconds</span>
        </div>
      </div>
    </>
  );
};

export default Counter;
