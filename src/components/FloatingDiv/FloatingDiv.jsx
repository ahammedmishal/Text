import React from "react";

import './FloatingDiv.css'
import { motion } from "framer-motion";

const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <motion.div 
    animate={{
      scale: [0.80, 0.90, 0.80],
    }}
    transition={{ ease: "linear", duration: 3, repeat: Infinity }}
    className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </motion.div>
  );
};

export default FloatinDiv;