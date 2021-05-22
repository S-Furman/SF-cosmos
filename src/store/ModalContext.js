import React, { useState } from "react";

export const ModalContext = React.createContext({
  isVisible: false,
  changeVisibility: () => {},
});

const ModalContextProvider = (props) => {
  const [isVisible, setIsClosed] = useState(false);

  const clickHandler = () => {
    setIsClosed(!isVisible);
    console.log(isVisible);
  };

  const contextValue = {
    isVisible: isVisible,
    changeVisibility: clickHandler,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
