import classes from "./Header.module.css";

import SingleRecord from "./SingleRecord/SingleRecord";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <button className={classes.typeBtn}>Type</button>
      <p className={classes.status}>Status</p>
      <div
        className={classes.container}
        style={{ overflowX: "hidden", overflowY: "scroll" }}
      >
        {props.data.slice(0, 30).map((p, index) => {
          return (
            <SingleRecord
              name={p[props.name]}
              details={p[props.details]}
              key={index}
            />
          );
        })}
      </div>
    </header>
  );
};

export default Header;
