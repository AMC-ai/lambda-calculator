import React, { useState } from "react";
import { numbers } from "../../../data";

const NumberButton = (props) => {
  // console.log(props)
  console.log(useState())
  console.log(numbers);
  return (
    <>
      <button onClick={() => { props.setDisplay(props.num); }}>
        {props.num}
      </button>

    </>
  );
};
export default NumberButton;