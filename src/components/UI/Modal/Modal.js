import { useEffect, useState, useContext } from "react";
import { ModalContext } from "../../../store/ModalContext";

import classes from "./Modal.module.css";

import Headline from "./Headline/Headline";
import Header from "./Header/Header";

const Modal = () => {
  const modalCtx = useContext(ModalContext);

  const [fetchedData, setFetchedData] = useState();
  const isFetched = !!fetchedData;

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    let url;

    if (modalCtx.type === "Capsules") {
      url = "https://api.spacexdata.com/v4/capsules";
      setTitle("type");
      setDetails("status");
    }
    if (modalCtx.type === "Crew") {
      url = "https://api.spacexdata.com/v4/crew";
      setTitle("name");
      setDetails("agency");
    }
    if (modalCtx.type === "Rockets") {
      url = "https://api.spacexdata.com/v4/rockets";
      setTitle("name");
      setDetails("first_flight");
    }

    if (modalCtx.type === "Starlinks") {
      url = "https://api.spacexdata.com/v4/starlink";
      setTitle("version");
      setDetails("spaceTrack.object");
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFetchedData(data))
      .catch((error) => {
        console.log(error);
      });
  }, [modalCtx.type]);

  return (
    <div className={classes.modal}>
      <Headline title={modalCtx.type} />
      {isFetched && (
        <Header data={fetchedData} name={title} details={details} />
      )}
      {!isFetched && <div className={classes.loader}>Loading...</div>}
    </div>
  );
};

export default Modal;
