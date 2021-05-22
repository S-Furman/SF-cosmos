import classes from "./Modal.module.css";

import Headline from "./Headline/Headline";
import Header from "./Header/Header";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <Headline />
      <Header />
    </div>
  );
};

export default Modal;
