import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import {
  handleIncrease,
  handleDecrease,
  handleReset,
  setNumberColor
} from "./helpers";

const Container = styled.div`
  position: relative;
  padding: 120px 16px 0px 16px;
  height: 100vh;
  background: #f1f5f8;
  /* border: 2px solid lightcoral; */

  @media (min-width: 400px) {
    left: calc(50% - 400px / 2);
    width: 400px;
  }
`;

const Title = styled.h2`
  font-size: 44px;
  line-height: 48px;
  text-align: center;
  color: #414141;
  /* border: 1px dashed green; */
`;

const Subtitle = styled.p`
  margin-bottom: 48px;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #414141;
  opacity: 0.6;
  /* border: 1px dashed green; */
`;

const CounterNumber = styled.h1`
  margin-bottom: 48px;
  font-size: 88px;
  line-height: 92px;
  /* color: #414141; */
  color: ${(props) => props.color};
  text-align: center;
  /* border: 1px dashed green; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px dashed green; */
`;

export default function App() {
  const [counter, setCounter] = useState(0);
  let numberColor = setNumberColor(counter);

  return (
    <>
      <Container>
        <Title>{"Counter App"}</Title>
        <Subtitle>{"Please increment or decrement below."}</Subtitle>
        <CounterNumber color={numberColor}>{counter}</CounterNumber>
        <Wrapper>
          <Button
            label={"Increase"}
            onclick={() => handleIncrease(counter, setCounter)}
          />
          <Button label={"Reset"} onclick={() => handleReset(setCounter)} />
          <Button
            label={"Decrease"}
            onclick={() => handleDecrease(counter, setCounter)}
          />
        </Wrapper>
      </Container>
    </>
  );
}
