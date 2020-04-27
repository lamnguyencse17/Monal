import { SET_AUTH } from "../actions/types";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  id_token: localStorage.getItem("id_token"),
  expires_at: localStorage.getItem("expires_at"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SET_AUTH: {
      let { access_token, id_token, expires_at } = action.payload;
      return {
        access_token,
        id_token,
        expires_at,
      };
    }
  }
}
