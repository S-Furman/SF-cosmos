import rightCircle from "../../../assets/backgroundElements/rightCircle.svg";
import leftCircle from "../../../assets/backgroundElements/leftCircle.svg";
import upperCircle from "../../../assets/backgroundElements/upperCircle.svg";
import dot1 from "../../../assets/backgroundElements/pathes/Path 109.svg";
import dot2 from "../../../assets/backgroundElements/pathes/Path 108.svg";
import dot3 from "../../../assets/backgroundElements/pathes/Path 107.svg";
import dot4 from "../../../assets/backgroundElements/pathes/Path 106.svg";
import dot5 from "../../../assets/backgroundElements/pathes/Path 110.svg";

import classes from "./BackgroundElements.module.css";

const BackgroundElements = () => {
  return (
    <>
      <img className={classes.rightCircle} src={rightCircle} />
      <img className={classes.upperCircle} src={upperCircle} />
      <img className={classes.leftCircle} src={leftCircle} />
      <img className={classes.dot1} src={dot1} />
      <img className={classes.dot2} src={dot2} />
      <img className={classes.dot3} src={dot3} />

      <img className={classes.dot4} src={dot4} />

      <img className={classes.dot5} src={dot5} />
    </>
  );
};

export default BackgroundElements;
