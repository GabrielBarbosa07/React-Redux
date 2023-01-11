<<<<<<< HEAD
import { createStore } from "redux";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);
=======
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(logger));
>>>>>>> starter

export default store;
