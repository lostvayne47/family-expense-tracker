import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/user.js";
import Loader from "./Loader.js";
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
          Hi, {user?.userName || ""}
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
      {true ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
