import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/user.js";
import Loader from "./Loader.js";
import "../css/home.css";
import UserView from "../components/UserView.js";
import GroupView from "./GroupView.js";

const HomePage = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    if (!authToken) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser()); // Fetch user data when the component loads
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center p-4 shadow-md ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <span className="text-lg font-semibold">
          Hi, {user?.userName || "Guest"}
        </span>
        <button
          onClick={() => {
            localStorage.removeItem("auth-token");
            navigate("/");
          }}
          className={`px-4 py-2 rounded-lg font-bold transition ${
            darkMode
              ? "bg-red-600 hover:bg-red-500"
              : "bg-red-500 hover:bg-red-400 text-white"
          }`}
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      {loading ? (
        <Loader />
      ) : (
        <div
          class="d-flex gap-2 bg-dark text-white"
          style={{ height: "calc(100vh - 90px)" }}
        >
          <div class="w-25 p-3 d-flex flex-column align-items-middle justify-content-center">
            <UserView userData={user} />
          </div>

          <div class="w-75 p-3 d-flex flex-column">
            <h2 class="fs-4 fw-bold text-center">Group Overview</h2>
            <GroupView />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
