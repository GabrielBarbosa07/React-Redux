const inicialState = {
  currentUser: null,
};

const userReducer = (state = inicialState, action) => {
  if (action.type === "user/login") {
    return { ...state, currentUser: 10 };
  }

  return state;
};

export default userReducer;
