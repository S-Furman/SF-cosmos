import classes from "./SingleCard.module.css";

const SingleCard = (props) => {
  return (
    <div
      className={classes.singleCard}
      style={{
        backgroundImage: `linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%), url(${props.imgPath})`,
      }}
    >
      <p className={classes.p}>{props.title}</p>
    </div>
  );
};

export default SingleCard;
