import axios from "axios";
import {
  GET_GAMES,
  GET_GAME_NAME,
  GET_GAMES_ID,
  POST_GAME,
} from "./actionTypes";

export const getGames = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/games");
    const games = response.data;
    dispatch({ type: GET_GAMES, patload: games });
  };
};
export const getGamebyId = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/games/${id}`);
    const game = response.data;
    dispatch({ type: GET_GAMES_ID, patload: game });
  };
};
export const getGamebyName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/games?name=${name}`
    );
    const game = response.data;
    dispatch({ type: GET_GAME_NAME, patload: game });
  };
};
