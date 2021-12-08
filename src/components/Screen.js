import React from "react";
import { Textfit } from "react-textfit";
import "./../css/Screen.css";

const Screen = ({ value = "" }) => {
  const screenColor = {
    background:
      value < 0
        ? "red"
        : "linear-gradient(90deg,rgba(255, 200, 0, 1) 0%,rgba(255, 180, 0, 1) 74%,rgba(255, 160, 0, 1) 100%",
  };

  return (
    <Textfit style={screenColor} className='screen' mode='single' max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
