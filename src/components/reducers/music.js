import {
  PUSH_TO_QUEUE,
  TOGGLE_PLAY,
  SET_CURRENT_AUDIO,
} from "../actions/types";

const initialState = {
  play: false,
  queue: [],
  progress: 0,
  audio: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case PUSH_TO_QUEUE: {
      let newQueue = state.queue + [action.payload];
      return {
        ...state,
        queue: newQueue,
      };
    }
    case TOGGLE_PLAY: {
      return {
        ...state,
        play: !state.play,
      };
    }
    case SET_CURRENT_AUDIO: {
      console.log(action.payload);
      return {
        ...state,
        progress: 0,
        audio: action.payload,
      };
    }
  }
}
