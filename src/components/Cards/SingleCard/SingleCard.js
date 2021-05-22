import { useContext, useState } from "react";
import { ModalContext } from "../../../store/ModalContext";
import classes from "./SingleCard.module.css";

const SingleCard = (props) => {
  const modalCtx = useContext(ModalContext);
  const [isHovering, setIsHovering] = useState(false);

  let styles = [classes.singleCard];
  if (isHovering) {
    styles.push(classes.hovering);
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={modalCtx.changeVisibility}
      className={styles.join(" ")}
      style={{
        backgroundImage: `linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%), url(${props.imgPath})`,
      }}
    >
      <p className={classes.p}>{props.title}</p>
    </div>
  );
};

export default SingleCard;
