import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

<<<<<<< HEAD
export const logoutUser = () => ({
=======
export const logoutUser = (payload) => ({
>>>>>>> starter
  type: UserActionTypes.LOGOUT,
});
