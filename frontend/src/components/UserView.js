import React from "react";

export default function UserView() {
  return (
    <div className="h-100 flex items-center justify-center text-gray-300 ">
      <div className=" h-100 w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          User Information
        </h2>
        <div className="space-y-3">
          <p>
            <span className="font-semibold text-gray-400">Username:</span> John
            Doe
          </p>
          <p>
            <span className="font-semibold text-gray-400">Email:</span>{" "}
            johndoe@example.com
          </p>
          <p>
            <span className="font-semibold text-gray-400">User ID:</span> 123456
          </p>
          <p>
            <span className="font-semibold text-gray-400">Groups:</span> Admin,
            Editor
          </p>
          <p>
            <span className="font-semibold text-gray-400">Total Expenses:</span>{" "}
            $5000
          </p>
        </div>
      </div>
    </div>
  );
}
