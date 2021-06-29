import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 4px 28px 4px 28px;
  font-size: 20px;
  line-height: 32px;
  border-radius: 8px;
  border: 1px solid #414141;
  background: none;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.2;
  }
`;

export default function Button(props) {
  const { label, onclick } = props;
  return <StyledButton onClick={onclick}>{label}</StyledButton>;
}
