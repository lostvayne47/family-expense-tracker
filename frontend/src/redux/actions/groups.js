export const FETCH_GROUP_REQUEST = "FETCH_GROUP_REQUEST";
export const FETCH_GROUP_SUCCESS = "FETCH_GROUP_SUCCESS";
export const FETCH_GROUP_FAILURE = "FETCH_GROUP_FAILURE";

export const CREATE_GROUP_REQUEST = "CREATE_GROUP_REQUEST";
export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const CREATE_GROUP_FAILURE = "CREATE_GROUP_FAILURE";

export const JOIN_GROUP_REQUEST = "JOIN_GROUP_REQUEST";
export const JOIN_GROUP_SUCCESS = "JOIN_GROUP_SUCCESS";
export const JOIN_GROUP_FAILURE = "JOIN_GROUP_FAILURE";

export const DELETE_GROUP_REQUEST = "DELETE_GROUP_REQUEST";
export const DELETE_GROUP_SUCCESS = "DELETE_GROUP_SUCCESS";
export const DELETE_GROUP_FAILURE = "DELETE_GROUP_FAILURE";

export const SHOW_GROUP_SUCCESS = "SHOW_GROUP_SUCCESS";

export const showGroupSuccess = (message) => ({
  type: SHOW_GROUP_SUCCESS,
  payload: message,
});

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

export const joinGroupRequest = () => ({
  type: JOIN_GROUP_REQUEST,
});

export const joinGroupSuccess = () => ({
  type: JOIN_GROUP_SUCCESS,
});

export const joinGroupFailure = (error) => ({
  type: JOIN_GROUP_FAILURE,
  payload: error,
});

export const deleteGroupRequest = () => ({
  type: DELETE_GROUP_REQUEST,
});

export const deleteGroupSuccess = () => ({
  type: DELETE_GROUP_SUCCESS,
});

export const deleteGroupFailure = (error) => ({
  type: DELETE_GROUP_FAILURE,
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
        mode: "cors",
        credentials: "include", // Add this if using authentication cookies
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
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(groupData),
        mode: "cors",
        credentials: "include", // Add this if using authentication cookies
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch(createGroupSuccess());
      dispatch(fetchGroups());
      dispatch(showGroupSuccess(data?.message));
    } catch (error) {
      dispatch(createGroupFailure(error.message));
    }
  };
};

export const joinGroup = (groupPasscode) => {
  return async (dispatch) => {
    try {
      dispatch(joinGroupRequest());
      const url = baseURL + "/api/v1/groups/joingroup";
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(groupPasscode),
        mode: "cors",
        credentials: "include", // Add this if using authentication cookies
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch(joinGroupSuccess());
      dispatch(fetchGroups());
      dispatch(showGroupSuccess(data?.message));
    } catch (error) {
      dispatch(joinGroupFailure(error.message));
    }
  };
};

export const deleteGroup = (groupId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteGroupRequest());
      const url = baseURL + "/api/v1/groups/deletegroup";
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(groupId),
        mode: "cors",
        credentials: "include", // Add this if using authentication cookies
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch(deleteGroupSuccess());
      dispatch(fetchGroups());
      dispatch(showGroupSuccess(data?.message));
    } catch (error) {
      dispatch(deleteGroupFailure(error.message));
    }
  };
};
