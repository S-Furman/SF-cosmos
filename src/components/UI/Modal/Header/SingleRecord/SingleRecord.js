import classes from "./SingleRecord.module.css";

const SingleRecord = (props) => (
  <div className={classes.container}>
    <p>{props.name}</p>
    <p style={{ marginLeft: "32px" }}>{props.details}</p>
  </div>
);

export default SingleRecord;
