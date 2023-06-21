import axios from "axios";
import {
  GET_GAMES,
  GET_GAME_NAME,
  GET_GAMES_ID,
  GET_GENRES,
  POST_GAME,
} from "./actionTypes";

export const getGames = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/games");
    const games = response.data;
    dispatch({ type: GET_GAMES, payload: games });
  };
};
export const getGamebyId = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/games/${id}`);
    const game = response.data;
    dispatch({ type: GET_GAMES_ID, payload: game });
  };
};
export const getGamebyName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/games?name=${name}`
    );
    const game = response.data;
    dispatch({ type: GET_GAME_NAME, payload: game });
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/genres");
    const genres = response.data;
    console.log("console genres" + genres);
    dispatch({ type: GET_GENRES, payload: genres });
  };
};

export const postGame = (form) => {
  return async function () {
    axios
      .post("http://localhost:3001/games", form)
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  };
};
