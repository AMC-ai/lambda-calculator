import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button>
        {props.char.value}
      </button>
    </>
  );
};
export default OperatorButton;