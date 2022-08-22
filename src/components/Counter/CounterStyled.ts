import styled from "styled-components";
import "@fontsource/oxanium";

const CounterStyled = styled.main`
  display: flex;
  background-color: #243342;
  justify-content: space-evenly;

  .container {
    display: flex;
  }

  .counter {
    display: flex;
    flex-direction: column;

    &__label {
      text-align: center;
      color: #ecf0ef;
      font-size: 20px;
    }

    &__number {
      background-color: #ffc700;
      text-align: center;
      padding: 20px 20px;
      margin: 20px;
      margin-bottom: 0;
      border-radius: 10px;
      color: #243342;
      font-size: 40px;
    }
  }
`;

export default CounterStyled;
