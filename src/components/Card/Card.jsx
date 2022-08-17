import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";
import Lottie from "react-lottie";
import * as code from '../../animations/code.json'

const Card = ({heading, detail, color ,animationData}) => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // here is where we will declare lottie animation
    // "animation" is what we imported before animationData: animation,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
    },
 };

  return (
      <div className="card" style={{borderColor: {color}}}> 
        <Lottie options={defaultOptions}  height={250} width={200} />
        <span>{heading}</span>
        <span style={{ color: darkMode ? "var(--silver)" : "" }}>{detail}</span>
        {/* <button className="button c-button">LEARN MORE</button> */}
      </div>
  );
};

export default Card;