import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;


// in my eccomerce project this file is used on store page and only eg: updown page is using reducer