import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className='operators'>
        {props.char.value}
      </button>
    </>
  );
};
export default OperatorButton;