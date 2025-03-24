const initialState = {
  userName: "Aahan",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeUserName":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

export default userReducer;
