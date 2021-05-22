import Layout from "./components/Layout/Layout";
import "./App.css";

import Cards from "./components/Cards/Cards";
import Illustration from "./components/Illustration/Illustration";
import Modal from "./components/UI/Modal/Modal";
import ModalContextProvider, { ModalContext } from "./store/ModalContext";
import { useContext } from "react";

function App() {
  const modalCtx = useContext(ModalContext);
  return (
    <Layout>
      <div className="App">
        <Cards />
        <Illustration />
        {modalCtx.isVisible && <Modal />}
      </div>
    </Layout>
  );
}

export default App;
