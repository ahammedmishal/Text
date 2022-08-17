import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import avatar1 from '../../img/avatar-vector.jpg'
import avatar2 from '../../img/avatar.png'
import avatarFrame from '../../img/avatar-frame.png'
import glassesimoji from "../../img/glassesimoji.png";
import web from "../../img/web.png";
import mob1 from "../../img/mob1.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typical from 'react-typical'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          {
            darkMode ? 
            <Typical
              className="spanDark"
              steps={['Ahammed Mishal',1000,'Developer',1000,'Designer',1000]}
              loop={Infinity}
              wrapper="span"
            />
            :
            <Typical
              className="spanLight"
              steps={['Ahammed Mishal',1000,'Developer',1000,'Designer',1000]}
              loop={Infinity}
              wrapper="span"
            />
          }
          <span>
            I'm a Passionate designer & developer who loves simplicity in things
            <br /> and crafts beautiful user interfaces with love.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="f-icons">
          <a href="https://www.instagram.com/_devil_angelzz_369/?hl=en">
            <Insta size={"3rem"}/>
          </a>
          <a href="">
            <Facebook size={"3rem"}/>
          </a>
          <a href="https://github.com/ahammedmishal">
            <Gitub size={"3rem"}/>
          </a>
        </div>
      </div>
      
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />*/}
        <motion.img 
          animate={{
            scale: [1.7, 1.9, 1.7],
          }} 
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          src={avatarFrame} alt="" />
        <img src={avatar2} alt="" />

        {/* Icon Emoji */}
        <motion.div
          initial={{ left: "-34%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
        >
        <motion.img
          animate={{
            scale: [0.80, 0.90, 0.80],
          }}
          transition={{ ease: "linear", duration: 3, repeat: Infinity }}
          src={glassesimoji}
          alt=""
        />
        </motion.div>

        {/* box conatiner1 */}

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={mob1} text1="Mobile App" text2="Developer" />
        </motion.div>

        {/* box conatiner2 */}

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={web} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        > 
        </div>
      </div>
    </div>
  );
};

export default Intro;