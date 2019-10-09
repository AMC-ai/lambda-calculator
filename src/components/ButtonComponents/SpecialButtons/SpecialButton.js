import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="special">
        {props.char}
      </button>
    </>
  );
};
export default SpecialButton;