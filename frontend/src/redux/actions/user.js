export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

const baseURL = process.env.REACT_APP_BASE_URL;
export const fetchUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest()); // Show loading
      const url = baseURL + "/api/v1/user/getuser";
      const autToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": autToken,
        },
        mode: "cors",
        credentials: "include", // Add this if using authentication cookies
      });
      const data = await response.json();
      dispatch(fetchUserSuccess(data)); // Store user data
    } catch (error) {
      dispatch(fetchUserFailure(error.message)); // Handle error
    }
  };
};
