import classes from "./SingleRecord.module.css";

const SingleRecord = (props) => {
  return (
    <div className={classes.container}>
      <p>Dragon 1.0</p>
      <p style={{ marginLeft: "32px" }}>retired</p>
    </div>
  );
};

export default SingleRecord;
