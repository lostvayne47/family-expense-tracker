import React from "react";

export default function Group() {
  return (
    <div
      className="border border-gray-500 p-6 text-center flex flex-col justify-center items-center bg-gray-800 text-gray-300 rounded-lg shadow-md"
      style={{ minWidth: "200px", minHeight: "200px" }}
    >
      <p className="text-lg font-semibold text-gray-100">Group Name</p>
      <p className="text-gray-400">Group ID</p>
      <p className="text-gray-400">Group Admin</p>
    </div>
  );
}
