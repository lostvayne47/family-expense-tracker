import React from "react";
import JoinGroup from "./JoinGroup";
import CreateGroup from "./CreateGroup";

export default function UserView({ userData, groups }) {
  let groupList = groups.reduce((acc, group) => {
    return acc + " " + group.groupName;
  }, ""); // Providing an initial value

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
            {groupList || ""}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Total Expenses:</span>{" "}
            {userData?.userExpenses.join(" ") || ""}
          </p>
        </div>
        <div className="container h-30 p-2 my-5 d-flex rounded bg-gray-700 justify-content-center align-items-center border">
          <JoinGroup />
        </div>
        <div className="container h-45 p-2 my-3 d-flex rounded bg-gray-700 justify-content-center align-items-center border">
          <CreateGroup />
        </div>
      </div>
    </div>
  );
}
