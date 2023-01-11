import { combineReducers } from "redux";

import userReducer from "./user/reducer";
<<<<<<< HEAD

const rootReducer = combineReducers({ userReducer });
=======
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({ userReducer, cartReducer });
>>>>>>> starter

export default rootReducer;
