import exitIcon from "../../../../assets/icons/Icon Color.svg";
import { useContext } from "react";

import { ModalContext } from "../../../../store/ModalContext";

import classes from "./Headline.module.css";

const Headline = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <header className={classes.headline}>
      <p className={classes.headerTitle}>Starlink</p>
      <img
        className={classes.exitIcon}
        onClick={modalCtx.changeVisibility}
        src={exitIcon}
        alt="exit icon"
      />
    </header>
  );
};

export default Headline;
