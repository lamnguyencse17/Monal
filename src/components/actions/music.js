import { PUSH_TO_QUEUE } from "./types";

export const pushToQueue = (audio) => (dispatch) => {
  dispatch({ type: PUSH_TO_QUEUE, payload: audio });
};
