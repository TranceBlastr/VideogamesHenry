import style from "./Card.module.css"


const Card = ({ image, name, genres, rating }) => {
  return (
    <div className={style.card}>
      <img src={image} alt="Unavailable" />
      <h3>{name}</h3>
      <p>Genre: </p>
      <p> {genres}</p>
      <div className={style.rating}>
        <p>Rating:</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default Card