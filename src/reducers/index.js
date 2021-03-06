import { combineReducers } from "redux";
import { planetsReducer } from './planetsReducer';
import { loadingReducer, errorReducer } from './loadingReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  planets: planetsReducer,
  loading: loadingReducer,
  user: userReducer,
  error: errorReducer
});
