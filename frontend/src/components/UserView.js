import React from "react";

export default function UserView({ userData }) {
  return (
    <div className="h-100 mt-2 flex items-center justify-center text-gray-300 ">
      <div className=" h-100 w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
        <div className="space-y-3">
          <p>
            <span className="font-semibold text-gray-400">Username:</span>{" "}
            {userData?.userName || ""}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Email:</span>{" "}
            {userData?.userEmail || ""}
          </p>
          <p>
            <span className="font-semibold text-gray-400">User ID:</span>{" "}
            {userData?._id || ""}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Groups:</span>{" "}
            {userData?.userGroups.join(" ") || ""}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Total Expenses:</span>{" "}
            {userData?.userExpenses.join(" ") || ""}
          </p>
        </div>
      </div>
    </div>
  );
}
