import classes from "./Illustration.module.css";

import Planet from "../../assets/illustration/Planet.svg";
import Rocket from "../../assets/illustration/Rocket.svg";
import Smoke1 from "../../assets/illustration/Smoke 1.svg";
import Smoke2 from "../../assets/illustration/Smoke 2.svg";
import Button from "../UI/Button/Button";

const Illustration = () => {
  return (
    <div>
      <img className={classes.planet} src={Planet} alt="planet" />
      <img className={classes.rocket} src={Rocket} alt="rocket" />
      <img className={classes.smoke1} src={Smoke1} alt="smoke1" />
      <img className={classes.smoke2} src={Smoke2} alt="smoke2" />
      <Button>Launch Rocket!</Button>
    </div>
  );
};

export default Illustration;
