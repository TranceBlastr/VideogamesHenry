import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import {useSelector} from "react-redux"

const CardsContainer = () => {
 const games = useSelector(state=>state.games)
//  const games =[
//   {
//     name:"1",
//     image:"asd",
//     rating:1,
//     genres:"action"
//   },
//   {
//     name:"2",
//     image:"asd",
//     rating:1,
//     genres:"action"
//   },
//   {
//     name:"3",
//     image:"asd",
//     rating:1,
//     genres:"action"
//   },
//   {
//     name:"4",
//     image:"asd",
//     rating:1,
//     genres:"action"
//   },
//   {
//     name:"5",
//     image:"asd",
//     rating:1,
//     genres:"action"
//   },
//  ]
  return (
    <div className={style.cardContainer}>
      {games.map((game) => (
        <Card
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
