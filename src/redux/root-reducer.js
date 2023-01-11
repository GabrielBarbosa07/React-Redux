import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
<<<<<<< HEAD

const rootReducer = combineReducers({ userReducer });
=======

const rootReducer = combineReducers({ userReducer, cartReducer });
>>>>>>> starter

export default rootReducer;
