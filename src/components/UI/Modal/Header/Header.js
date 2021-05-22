import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import classes from "./Header.module.css";

import SingleRecord from "./SingleRecord/SingleRecord";

const Header = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    let url = "https://api.spacexdata.com/v4/capsules";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
  }, []);

  return (
    <div className={classes.header}>
      <button className={classes.typeBtn}>Type</button>
      <p className={classes.status}>Status</p>
      <div
        className={classes.container}
        style={{ overflowX: "hidden", overflowY: "scroll" }}
      >
        {fetchedData.map((p, index) => {
          return <SingleRecord key={index} />;
        })}
      </div>
    </div>
  );
};

export default Header;
