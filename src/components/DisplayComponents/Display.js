import React, { useState } from "react";
import { numbers } from "../../data";

const Display = (props) => {
  console.log(useState())
  console.log(numbers);

  return <div className="display">{props.display}</div>;
};
export default Display;