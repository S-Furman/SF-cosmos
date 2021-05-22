import classes from "./Button.module.css";

const Button = (props) => (
  <button onClick={props.click} className={classes.btn}>
    {props.children}
  </button>
);

export default Button;
