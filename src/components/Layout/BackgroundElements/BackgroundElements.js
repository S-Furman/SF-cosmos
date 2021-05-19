import rightCircle from "../../../assets/backgroundElements/rightCircle.svg";
import leftCircle from "../../../assets/backgroundElements/leftCircle.svg";
import upperCircle from "../../../assets/backgroundElements/upperCircle.svg";

import classes from "./BackgroundElements.module.css";

const BackgroundElements = () => {
  return (
    <>
      <img className={classes.rightCircle} src={rightCircle} />
      <img className={classes.upperCircle} src={upperCircle} />
      <img className={classes.leftCircle} src={leftCircle} />
    </>
  );
};

export default BackgroundElements;
