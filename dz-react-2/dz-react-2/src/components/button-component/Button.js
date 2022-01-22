import React from 'react';

function Button({ classNameEl, handlClick, text }) {
  return (
    <button onClick={handlClick} className={classNameEl}>
      {text}
    </button>
  );
}

export default Button;
