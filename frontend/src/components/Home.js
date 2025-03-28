import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider.js";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/user.js";
import { fetchGroups } from "../redux/actions/groups.js";
import Loader from "./Loader.js";
import "../css/home.css";
import UserView from "./UserView.js";
import GroupSection from "./GroupSection.js";
import Popup from "./Popup.js";
import { fetchExpenses } from "../redux/actions/expense.js";
const Home = () => {
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

  useEffect(() => {
    dispatch(fetchUser()); // Fetch user data when the component loads
    dispatch(fetchGroups()); // Fetch group data when the component loads
    dispatch(fetchExpenses()); // Fetch expense data when the component loads
  }, [dispatch]);

  const { user, userLoading, userError } = useSelector((state) => state.user);
  const { groups, groupLoading, groupError, groupSuccess } = useSelector(
    (state) => state.group
  );
  const { expenses, expenseError, expenseSuccess } = useSelector(
    (state) => state.expense
  );
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
      <Popup
        showError={
          userError !== null || groupError !== null || expenseError !== null
        }
        showSuccess={groupSuccess !== null || expenseSuccess}
        message={
          groupSuccess ||
          expenseSuccess ||
          userError ||
          groupError ||
          expenseError
        }
      />
      <div className="flex flex-col sm:flex-row gap-4 bg-dark text-white p-2 h-[calc(100vh-100px)]">
        {/* User Overview - Takes full height and prevents overflow */}
        <div className="w-full sm:w-1/4 flex flex-col items-center justify-center h-full overflow-hidden">
          <h2 className="text-lg font-bold text-center">User Overview</h2>
          {userLoading ? (
            <Loader />
          ) : (
            <UserView userData={user} expenses={expenses} groups={groups} />
          )}
        </div>

        {/* Group Overview - Also takes full height */}
        <div className="w-full sm:w-3/4  flex flex-col h-full overflow-hidden">
          <h2 className="text-lg font-bold text-center">Group Overview</h2>
          {groupLoading ? <Loader /> : <GroupSection groups={groups} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
