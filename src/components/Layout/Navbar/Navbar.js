import { ReactComponent as Logo } from "../../../assets/Logo.svg";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Logo></Logo>
    </div>
  );
};

export default Navbar;
