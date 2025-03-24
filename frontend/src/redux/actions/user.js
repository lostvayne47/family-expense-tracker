export const changeUserName = (userName) => {
  return (dispatch) => {
    dispatch({
      type: "changeUserName",
      payload: userName,
    });
  };
};
