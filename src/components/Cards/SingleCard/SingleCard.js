import { useContext } from "react";
import classes from "./SingleCard.module.css";

import { ModalContext } from "../../../store/ModalContext";

const SingleCard = (props) => {
  const modalCtx = useContext(ModalContext);

  const clickHandler = () => {
    modalCtx.changeVisibility();
    modalCtx.chooseType(props.title);
  };

  return (
    <header
      onClick={clickHandler}
      className={classes.singleCard}
      style={{
        backgroundImage: `linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%), url(${props.imgPath})`,
      }}
    >
      <p className={classes.title}>{props.title}</p>
    </header>
  );
};

export default SingleCard;
