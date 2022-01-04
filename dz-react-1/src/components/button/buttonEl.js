import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
  font-size: 18px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid transparent;
  color: white;
  margin: 10px;
  padding: 8px;
  cursor: pointer;
`;

const ButtonEl = ({ text, backgroundColorEl, buttonEvent }) => {
  return (
    <ButtonBlock
      onClick={buttonEvent}
      style={{ backgroundColor: backgroundColorEl }}
    >
      {text}
    </ButtonBlock>
  );
};

export default ButtonEl;
