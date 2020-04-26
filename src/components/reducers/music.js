import { PUSH_TO_QUEUE } from "../actions/types";

const initialState = {
  queue: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case PUSH_TO_QUEUE: {
      let newQueue = state.queue + [action.payload];
      return {
        queue: newQueue,
      };
    }
  }
}
