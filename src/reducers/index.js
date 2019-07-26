import { combineReducers } from "redux";
import { planetsReducer } from './planetsReducer';

export const rootReducer = combineReducers({
  planets: planetsReducer
});
