import {
  GET_GAMES,
  GET_GAME_NAME,
  GET_GAMES_ID,
  POST_GAME,
  GET_GENRES,
} from "./actionTypes";

const initialState = {
  games: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games: action.payload };
    case GET_GENRES:
      return { ...state, genres: action.payload };
    // case GET_GAME_NAME:
    //   return { ...state, games: action.payload };
    // case GET_GAMES_ID:
    //   return { ...state, games: action.payload };
    // case POST_GAME:
    //   return { ...state, games: action.payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
