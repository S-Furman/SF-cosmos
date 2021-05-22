import { useEffect, useState, useRef } from "react";
import classes from "./Illustration.module.css";

import { CSSTransition } from "react-transition-group";

import Planet from "../../assets/illustration/Planet.svg";
import Rocket from "../../assets/illustration/Rocket.svg";
import Smoke1 from "../../assets/illustration/Smoke 1.svg";
import Smoke2 from "../../assets/illustration/Smoke 2.svg";
import LandingGear from "../../assets/illustration/landing gear.svg";
import Button from "../UI/Button/Button";

const Illustration = () => {
  const [launchRocket, setLaunchRocket] = useState(false);
  const firstAnimation = useRef(null);
  const secondAnimation = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLaunchRocket(false);
    }, 1000);
  }, [launchRocket]);

  return (
    <>
      <div className={classes.illustrationContainer}>
        <img className={classes.planet} src={Planet} alt="planet" />
        <CSSTransition
          in={launchRocket}
          timeout={300}
          classNames={{
            enterActive: classes.launchEnterActive,
            enterDone: classes.launchEnterDone,
            exitActive: classes.launchExitActive,
            exitDone: classes.launchExitDone,
          }}
          nodeRef={firstAnimation}
        >
          <div ref={firstAnimation}>
            <img className={classes.rocket} src={Rocket} alt="rocket" />
            <img
              className={classes.landingGear}
              src={LandingGear}
              alt="landing Gear"
            />
          </div>
        </CSSTransition>

        <CSSTransition
          in={launchRocket}
          timeout={300}
          classNames={{
            enterActive: classes.enterActive,
            enterDone: classes.enterDone,
            exitActive: classes.exitActive,
            exitDone: classes.exitDone,
          }}
          nodeRef={secondAnimation}
        >
          <div ref={secondAnimation}>
            <img className={classes.smoke1} src={Smoke1} alt="1st smoke" />
            <img className={classes.smoke2} src={Smoke2} alt="2nd smoke" />
          </div>
        </CSSTransition>

        <Button click={() => setLaunchRocket(true)}>Launch Rocket!</Button>
      </div>
    </>
  );
};

export default Illustration;
