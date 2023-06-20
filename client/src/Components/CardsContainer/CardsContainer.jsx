import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
 const games = useSelector(state=>state.games)
 
  return (
    <div className={style.cardContainer}>
      {games.map((game) => (
        <Card
          id={game.id}
          name={game.name}
          image={game.image}
          rating={game.rating}
          genres={game.genres}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
