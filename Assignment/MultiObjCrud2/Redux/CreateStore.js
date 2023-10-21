import { countReducer } from "./Count/Reducer";
import { createStore } from "redux";

export const objStore = createStore(countReducer);
