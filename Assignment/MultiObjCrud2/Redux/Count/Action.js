import { COUNT } from "./Constant";

export const countAction = (x) => {
  return { type: COUNT, payload: x };
};
