import { SET_AUTH } from "./types";

export const getAuth = (auth) => (dispatch) => {
  dispatch({ type: SET_AUTH, payload: { ...auth } });
};
