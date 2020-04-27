import {
  PUSH_TO_QUEUE,
  TOGGLE_PLAY,
  SET_CURRENT_AUDIO,
  NEXT_AUDIO,
} from "../actions/types";
import { ListItemSecondaryAction } from "@material-ui/core";

const initialState = {
  play: false,
  queue: [],
  progress: 0,
  audio: null,
  history: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case PUSH_TO_QUEUE: {
      let newQueue = [...state.queue, action.payload];
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
      return {
        ...state,
        progress: 0,
        audio: action.payload,
      };
    }
    case NEXT_AUDIO:
      let newQueue = [...state.queue];
      let newHistory = [...state.history, state.queue[0]];

      return {
        ...state,
        audio: newQueue.shift(),
        queue: newQueue,
        histore: newHistory,
      };
  }
}
