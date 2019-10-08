import React, { useState } from "react";
import { numbers } from "../../../data";

const NumberButton = (props) => {
  // console.log(props)

  return (
    <>
      <button onClick={() => { props.setDisplay(props.num); console.log(11111) }}>
        {props.num}
      </button>

    </>
  );
};
export default NumberButton;