import { COUNT } from "./Constant";

export const countReducer = (state = [], action) => {
  switch (action.type) {
    case COUNT:
      return [...state, action.payload];

    default:
      return state;
  }
};
