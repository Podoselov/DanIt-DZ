'use strict';

import React, { Component, useState } from 'react';
import ButtonEl from '../components/button/buttonEl';
import classes from '../css/main.module.scss';
import classesButtonEl from '../components/button/buttonEl.module.scss';
import ModalEl from '../components/modal/modalEl.js';

const App = () => {
  const [button, setButtonState] = useState();

  const clickButton = (event) => {
    setButtonState(console.log(event.target));
  };

  const [modal, setModal] = useState([
    
  ]);

  const  

  return (
    <div className={classes.container}>
      <div className={classes.containerButton}>
        <ButtonEl
          classEl={classesButtonEl.button}
          backgroundColorEl='red'
          text='Open first modal'
          buttonEvent={clickButton}
        />
        <ButtonEl
          classEl={classesButtonEl.button}
          backgroundColorEl='black'
          text='Open second modal'
          buttonEvent={clickButton}
        />
      </div>
      {/* <ModalEl
        header='Do you want to delete this file?'
        text='Once you delete this file, it won’t be possible to undo this action. 
        Are you sure you want to delete it?'
      /> */}
    </div>
  );
};

export default App;
