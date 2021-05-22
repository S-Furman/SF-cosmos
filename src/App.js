import { useContext } from "react";
import { ModalContext } from "./store/ModalContext";

import Cards from "./components/Cards/Cards";
import Illustration from "./components/Illustration/Illustration";
import Modal from "./components/UI/Modal/Modal";
import Layout from "./components/Layout/Layout";

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
