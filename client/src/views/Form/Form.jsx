import {useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux"
import { getGenres, postGame } from "../../redux/actions";
import platform from "./platforms"
import validate from "./validate"
import style from "./Form.module.css"

const Form = () => {

  //!Estados locales del form y de errores

  const [gameData, setGameData] = useState({
    name: "",
    background_image: "",
    description: "",
    platform:[],
    launch: "",
    rating: 1.0,
    genres: [],
  });

  const [errors, setErrors] =useState({
    name:"",
    description:"",
    background_image:"",
    launch:"",
    platform:"",
    genres:""
  })

  //!Handlers--------------------------------------

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...gameData, [name]: value };
    const errors = validate(updatedFormData);

    setGameData(updatedFormData);
    setErrors(errors);
  };

  const genreChangeHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGameData((prevData) => ({
        ...prevData,
        genres: [...prevData.genres, value],
      }));
    } else {
      setGameData((prevData) => ({
        ...prevData,
        genres: prevData.genres.filter((genre) => genre !== value),
      }));
    };
  };

  const platformChangeHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGameData((prevData) => ({
        ...prevData,
        platform: [...prevData.platform, value],
      }));
    } else {
      setGameData((prevData) => ({
        ...prevData,
        platform: prevData.platform.filter((platform) => platform !== value),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(gameData)
    dispatch(postGame(gameData));
    // setGameData({
    //   name: "",
    //   background_image: "",
    //   description: "",
    //   platform: [],
    //   launch: "",
    //   rating: 1,
    //   genres: [],
    // });
  };

  //!Dispatch--------------------------------------  
  
const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getGenres())
  },[dispatch]) 
  const genres = useSelector(state=>state.genres)
console.log(genres)
  //!Componente------------------------------------

return (
  <form onSubmit={handleSubmit} className={style["form-container"]}>
  <label>Nombre:</label>
  <input
    type="text"
    name="name"
    value={gameData.name}
    onChange={changeHandler}
    placeholder="Ingrese el nombre del juego"
  />
  {errors.name && <p className={style.error}>{errors.name}</p>}

  <label>Imagen:</label>
  <input
    type="text"
    name="background_image"
    value={gameData.background_image}
    onChange={changeHandler}
    placeholder="Ingrese la URL de la imagen."
  />
  {errors.backgroundImage && (
    <p className={style.error}>{errors.backgroundImage}</p>
  )}

  <label>Descripción:</label>
  <textarea
    name="description"
    value={gameData.description}
    onChange={changeHandler}
    maxLength={300}
    placeholder="Ingrese la descripcion del juego."
  />
  {errors.description && <p className={style.error}>{errors.description}</p>}

  <label>Plataforma:</label>
  {platform.map((plat) => {
    const name = String(plat);
    return (
      <p key={plat}>
        {plat}
        <input
          type="checkbox"
          name="platform"
          value={plat}
          checked={gameData.platform.includes(name)}
          onChange={platformChangeHandler}
        />
      </p>
    );
  })}
  {errors.platform && <p className={style.error}>{errors.platform}</p>}

  <label>Fecha de lanzamiento:</label>
  <input
    type="date"
    id="dateInput"
    name="launch"
    value={gameData.launch}
    onChange={changeHandler}
  />
  {errors.launch && <p className={style.error}>{errors.launch}</p>}

  <label>Rating:</label>
  <input
    type="number"
    name="rating"
    min="1.0"
    max="5.0"
    step="0.01"
    value={gameData.rating}
    onChange={changeHandler}
  />

  <label>Géneros:</label>
  {genres.map((g) => {
    // const name = String(g.name);
    return (
      <p key={g}>
        {g}
        <input
          type="checkbox"
          name="genres"
          value={g}
          checked={gameData.genres.includes(g)}
          onChange={genreChangeHandler}
        />
      </p>
    );
  })}
  {errors.genres && <p className={style.error}>{errors.genres}</p>}

  <button type="submit">Crear Juego</button>
</form>
  );
};

export default Form;
