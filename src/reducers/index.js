import { combineReducers } from "redux";
import { planetsReducer } from './planetsReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  planets: planetsReducer,
  loading: loadingReducer
});
