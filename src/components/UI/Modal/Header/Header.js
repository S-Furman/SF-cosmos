import classes from "./Header.module.css";

import SingleRecord from "./SingleRecord/SingleRecord";

import arrowUpDown from "../../../../assets/icons/ic16-import-export.svg";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <button className={classes.typeBtn}>
        <p className={classes.typeP}>Type</p>
        {
          <img
            src={arrowUpDown}
            alt="sorting arrows"
            className={classes.arrowUpDown}
          />
        }
      </button>
      <div className={classes.status}>Status</div>
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
