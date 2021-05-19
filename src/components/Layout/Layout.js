import Navbar from "./Navbar/Navbar";
import { ReactComponent as BackgroundElements } from "../../assets/background.svg";
import { ReactComponent as Circle } from "../../assets/Circle.svg";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
