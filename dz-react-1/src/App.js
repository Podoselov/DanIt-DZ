import React, { Component, useState } from 'react';
import styled from 'styled-components';
import ButtonEl from './components/button/buttonEl.js';
import ModalEl from './components/modal/modalEl.js';

const AppBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

function App() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const openFirstModal = (event) => {
    event.preventDefault();
    firstModal ? setFirstModal(false) : setFirstModal(true);
  };

  const openSecondModal = (event) => {
    event.preventDefault();
    secondModal ? setSecondModal(false) : setSecondModal(true);
  };

  return (
    <AppBlock>
      <ButtonEl
        buttonEvent={openFirstModal}
        text={'Open first modal'}
        backgroundColorEl={'red'}
      />
      <ButtonEl
        buttonEvent={openSecondModal}
        text={'Open second modal'}
        backgroundColorEl={'green'}
      />
      <ModalEl
        active={firstModal}
        setActive={setFirstModal}
        header={`Do you want to delete this file?`}
        text={`Once you delete this file, it won’t be possible to undo this action. 
        Are you sure you want to delete it?`}
        action={
          <div>
            <ButtonEl
              buttonEvent={openFirstModal}
              text={`Ok`}
              backgroundColorEl={`#b3382c`}
            ></ButtonEl>
            <ButtonEl
              buttonEvent={openFirstModal}
              text={`Cancel`}
              backgroundColorEl={`#b3382c`}
            ></ButtonEl>
          </div>
        }
        closeButton
      />
      <ModalEl
        active={secondModal}
        setActive={setSecondModal}
        header={`Do you want to save this file ?`}
        text={`Are you sure you want to save it ?`}
        action={
          <div>
            <ButtonEl
              buttonEvent={openSecondModal}
              text={`Ok`}
              backgroundColorEl={`#b3382c`}
            ></ButtonEl>
            <ButtonEl
              buttonEvent={openSecondModal}
              text={`Cancel`}
              backgroundColorEl={`#b3382c`}
            ></ButtonEl>
          </div>
        }
        closeButton
      />
    </AppBlock>
  );
}

export default App;
