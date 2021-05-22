import React, { useState } from "react";

export const ModalContext = React.createContext({
  type: "",
  chooseType: () => {},
  isVisible: false,
  changeVisibility: () => {},
});

const ModalContextProvider = (props) => {
  const [isVisible, setIsClosed] = useState(false);
  const [type, setType] = useState("");

  const contextValue = {
    isVisible: isVisible,
    changeVisibility: () => setIsClosed(!isVisible),
    type: type,
    chooseType: (type) => setType(type),
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
