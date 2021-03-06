import SingleCard from "./SingleCard/SingleCard";
import crew from "../../assets/cards/crew.svg";
import capsules from "../../assets/cards/capsules.svg";
import rockets from "../../assets/cards/rockets.svg";
import details from "../../assets/cards/details.svg";
import classes from "./Cards.module.css";

const Cards = () => {
  const cards = [
    {
      title: "Capsules",
      imgPath: capsules,
    },
    {
      title: "Crew",
      imgPath: crew,
    },
    {
      title: "Rockets",
      imgPath: rockets,
    },
    {
      title: "Starlinks",
      imgPath: details,
    },
  ];

  return (
    <article className={classes.cardsContainer}>
      {cards.map((singleCard, index) => {
        return (
          <SingleCard
            key={index}
            title={singleCard.title}
            imgPath={singleCard.imgPath}
          />
        );
      })}
    </article>
  );
};
export default Cards;
