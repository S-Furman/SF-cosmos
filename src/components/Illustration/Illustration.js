import classes from "./Illustration.module.css";

import { CSSTransition } from "react-transition-group";

import Planet from "../../assets/illustration/Planet.svg";
import Rocket from "../../assets/illustration/Rocket.svg";
import Smoke1 from "../../assets/illustration/Smoke 1.svg";
import Smoke2 from "../../assets/illustration/Smoke 2.svg";
import LandingGear from "../../assets/illustration/landing gear.svg";
import Button from "../UI/Button/Button";
import { useEffect, useState, useRef } from "react";

const Illustration = () => {
  const [launchRocket, setLaunchRocket] = useState(false);

  useEffect(() => {
    console.log(launchRocket);
    setTimeout(() => {
      setLaunchRocket(false);
    }, 1000);
  }, [launchRocket]);

  const firstAnimation = useRef(null);
  const secondAnimation = useRef(null);

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
              alt="landingGear"
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
            <img className={classes.smoke1} src={Smoke1} alt="smoke1" />
            <img className={classes.smoke2} src={Smoke2} alt="smoke2" />
          </div>
        </CSSTransition>

        <Button click={() => setLaunchRocket(true)}>Launch Rocket!</Button>
      </div>
    </>
  );
};

export default Illustration;
