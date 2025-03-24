const baseURL = process.env.REACT_APP_BASE_URL;

const createUser = async (payload) => {
  const url = baseURL + "/api/v1/user/createuser";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error creating user:", error.message);
  }
};

const loginUser = async (payload) => {
  try {
    const url = baseURL + "/api/v1/user/login";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.authToken) {
      localStorage.setItem("auth-token", data.authToken);
    }
    return data;
  } catch (error) {
    console.log("Error logging in user:", error.message);
  }
};

export { createUser, loginUser };
