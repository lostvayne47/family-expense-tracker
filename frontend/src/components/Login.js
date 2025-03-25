import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../api/user";

const Login = () => {
  const { darkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isFormValid = email.trim() !== "" && password.trim() !== "";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userEmail: email,
      userPassword: password,
    };
    const status = await loginUser(payload);
    if (status?.success) {
      navigate("/home");
    } else {
      setError(status?.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 shadow-lg rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-bold">
            Email <span className="text-red-500">*</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              autoComplete="email"
              required
            />
          </label>
          <label className="block text-sm font-bold">
            Password <span className="text-red-500">*</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              autoComplete="new-password"
              required
            />
          </label>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full px-4 py-2 rounded-lg font-bold transition ${
              isFormValid
                ? darkMode
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-blue-500 hover:bg-blue-400 text-white"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Log In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
