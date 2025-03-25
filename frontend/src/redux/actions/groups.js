export const FETCH_GROUP_REQUEST = "FETCH_GROUP_REQUEST";
export const FETCH_GROUP_SUCCESS = "FETCH_GROUP_SUCCESS";
export const FETCH_GROUP_FAILURE = "FETCH_GROUP_FAILURE";

export const CREATE_GROUP_REQUEST = "CREATE_GROUP_REQUEST";
export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const CREATE_GROUP_FAILURE = "CREATE_GROUP_FAILURE";

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

export const createGroupRequest = () => ({
  type: CREATE_GROUP_REQUEST,
});

export const createGroupSuccess = () => ({
  type: CREATE_GROUP_SUCCESS,
});

export const createGroupFailure = (error) => ({
  type: CREATE_GROUP_FAILURE,
  payload: error,
});

const baseURL = process.env.REACT_APP_BASE_URL;
export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchGroupRequest()); // Show loading
      const url = baseURL + "/api/v1/groups/getusergroups";
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      dispatch(fetchGroupSuccess(data)); // Store user data
    } catch (error) {
      dispatch(fetchGroupFailure(error.message)); // Handle error
    }
  };
};

export const createGroup = (groupData) => {
  return async (dispatch) => {
    try {
      dispatch(createGroupRequest());
      const url = baseURL + "/api/v1/groups/creategroup";
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(groupData),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error("Request failed");
      }
      dispatch(createGroupSuccess());
    } catch (error) {
      dispatch(createGroupFailure(error.message));
    }
  };
};
