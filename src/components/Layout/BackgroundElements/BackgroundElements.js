import classes from "./BackgroundElements.module.css";

import rightCircle from "../../../assets/backgroundElements/rightCircle.svg";
import leftCircle from "../../../assets/backgroundElements/leftCircle.svg";
import upperCircle from "../../../assets/backgroundElements/upperCircle.svg";
import dot1 from "../../../assets/backgroundElements/pathes/Path 109.svg";
import dot2 from "../../../assets/backgroundElements/pathes/Path 108.svg";
import dot3 from "../../../assets/backgroundElements/pathes/Path 107.svg";
import dot4 from "../../../assets/backgroundElements/pathes/Path 106.svg";
import dot5 from "../../../assets/backgroundElements/pathes/Path 110.svg";

const BackgroundElements = () => (
  <>
    <img
      className={classes.rightCircle}
      src={rightCircle}
      alt="backgound circle"
    />
    <img
      className={classes.upperCircle}
      src={upperCircle}
      alt="backgound circle"
    />
    <img
      className={classes.leftCircle}
      src={leftCircle}
      alt="backgound circle"
    />
    <img className={classes.dot1} src={dot1} alt="background dot" />
    <img className={classes.dot2} src={dot2} alt="background dot" />
    <img className={classes.dot3} src={dot3} alt="background dot" />
    <img className={classes.dot4} src={dot4} alt="background dot" />
    <img className={classes.dot5} src={dot5} alt="background dot" />
  </>
);

export default BackgroundElements;
