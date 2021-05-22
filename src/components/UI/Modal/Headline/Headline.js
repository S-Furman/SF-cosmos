import { useContext } from "react";
import { ModalContext } from "../../../../store/ModalContext";

import classes from "./Headline.module.css";

import exitIcon from "../../../../assets/icons/Icon Color.svg";

const Headline = (props) => {
  const modalCtx = useContext(ModalContext);

  return (
    <div className={classes.headline}>
      <p className={classes.headerTitle}>{props.title}</p>
      <img
        className={classes.exitIcon}
        onClick={modalCtx.changeVisibility}
        src={exitIcon}
        alt="exit icon"
      />
    </div>
  );
};

export default Headline;
