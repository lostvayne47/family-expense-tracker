import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Link, useNavigate } from "react-router";
import { createUser } from "../api/user";

const Signup = () => {
  const { darkMode } = useTheme();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isFormValid =
    fullName.trim().length >= 3 &&
    email.trim() !== "" &&
    password.length >= 8 &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    e.target.setCustomValidity(
      e.target.value === password ? "" : "Passwords do not match"
    );
    e.target.reportValidity();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: fullName,
      userEmail: email,
      userPassword: password,
    };

    const status = await createUser(payload);
    if (status?.success) {
      navigate("/login");
    } else {
      setError(status?.message || "Something went wrong");
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
        <h2 className="text-3xl font-extrabold text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-bold">
            Full Name <span className="text-red-500">*</span>
            <input
              type="text"
              placeholder="Full Name (at least 3 characters)"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              autoComplete="username"
              required
            />
          </label>
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
              autoComplete="Email"
              required
            />
          </label>
          <label className="block text-sm font-bold">
            Password <span className="text-red-500">*</span>
            <input
              type="password"
              placeholder="Password (at least 8 characters)"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              autoComplete="new-password"
              required
            />
          </label>
          <label className="block text-sm font-bold">
            Confirm Password <span className="text-red-500">*</span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
