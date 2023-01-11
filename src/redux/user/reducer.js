import UserActionTypes from "./action-types";

<<<<<<< HEAD
const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
=======
const inicialState = {
  currentUser: null,
};

const userReducer = (state = inicialState, action) => {
>>>>>>> starter
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
