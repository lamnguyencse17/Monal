import {
  PUSH_TO_QUEUE,
  TOGGLE_PLAY,
  SET_CURRENT_AUDIO,
  NEXT_AUDIO,
} from "./types";

export const pushToQueue = (audio) => (dispatch) => {
  dispatch({ type: PUSH_TO_QUEUE, payload: audio });
};

export const togglePlay = (audioObject) => (dispatch) => {
  audioObject.togglePlay();
  dispatch({ type: TOGGLE_PLAY });
};

export const setCurrentAudio = (audio) => (dispatch) => {
  dispatch({ type: SET_CURRENT_AUDIO, payload: audio });
};

export const nextAudio = (oldAudio, newAudio) => (dispatch) => {
  oldAudio.togglePlay();
  newAudio.togglePlay();
  dispatch({ type: NEXT_AUDIO });
};