import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../../store/actions.js';

const ModalBlock = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: rgb(30, 30, 32);
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  width: 35%;
  position: relative;
  color: rgb(255, 255, 255);
  h2 {
    background-color: rgb(42, 42, 46);
    padding: 26px 0 21px 29px;
    font-size: 22px;
    text-align: center;
    svg {
      padding: 0;
      margin: 0 0 0 80px;
    }
  }
  p {
    font-size: 15px;
    text-align: center;
    padding: 36px;
  }
  button {
    padding: 15px 30px;
  }
  div {
    display: flex;
    justify-content: center;
  }
`;

const ModalEl = ({
  header,
  text,
  closeButton = false,
  action,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();

  return (
    <ModalBlock
      onClick={() => {
        setActive(false);
        dispatch(modalOpen(false));
      }}
      style={active ? { display: 'block' } : { display: 'none' }}
    >
      <ModalContent
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h2>
          {header}
          {closeButton ? (
            <FaTimes
              onClick={() => {
                setActive(false);
                dispatch(modalOpen(false));
              }}
            ></FaTimes>
          ) : null}
        </h2>
        <p>{text}</p>
        {action}
      </ModalContent>
    </ModalBlock>
  );
};

export default ModalEl;
