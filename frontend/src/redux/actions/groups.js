export const FETCH_GROUP_REQUEST = "FETCH_GROUP_REQUEST";
export const FETCH_GROUP_SUCCESS = "FETCH_GROUP_SUCCESS";
export const FETCH_GROUP_FAILURE = "FETCH_GROUP_FAILURE";

export const fetchGroupRequest = () => ({
  type: FETCH_GROUP_REQUEST,
});

export const fetchGroupSuccess = (group) => ({
  type: FETCH_GROUP_SUCCESS,
  payload: group,
});

export const fetchGroupFailure = (error) => ({
  type: FETCH_GROUP_FAILURE,
  payload: error,
});

const baseURL = process.env.REACT_APP_BASE_URL;
export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchGroupRequest()); // Show loading
      const url = baseURL + "/api/v1/groups/getusergroups";
      const autToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": autToken,
        },
      });
      const data = await response.json();
      dispatch(fetchGroupSuccess(data)); // Store user data
    } catch (error) {
      dispatch(fetchGroupFailure(error.message)); // Handle error
    }
  };
};
