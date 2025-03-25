import React from "react";
import JoinGroup from "./JoinGroup";
import CreateGroup from "./CreateGroup";

export default function UserView({ userData, groups }) {
  let groupList = groups?.reduce((acc, group) => {
    return acc + " " + group.groupName;
  }, ""); // Providing an initial value

  return (
    <div className="h-100 flex  items-center justify-center text-gray-300 overflow-auto">
      <div className=" h-100 w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-3  border border-gray-700 overflow-auto d-flex flex-column gap-1 justify-content-evenly align-items-between">
        <div className="container p-2 gap-2  rounded bg-gray-700 border d-flex flex-column justify-content-evenly">
          <div>
            <p>
              <span className="font-bold text-gray-300">Username:</span>{" "}
              {userData?.userName || ""}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-gray-300">Email:</span>{" "}
              {userData?.userEmail || ""}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-gray-300">User ID:</span>{" "}
              {userData?._id || ""}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-gray-300">Groups:</span>{" "}
              {groupList || ""}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-gray-300">Total Expenses:</span>{" "}
              {userData?.userExpenses.join(" ") || ""}
            </p>
          </div>
        </div>
        <div
          className="container gap-1 p-0 d-flex flex-column justify-content-evenly align-items-center"
          style={{ height: "-webkit-fill-available" }}
        >
          <div className="container h-30 p-2 d-flex rounded bg-gray-700 justify-content-center align-items-center border">
            <JoinGroup />
          </div>
          <div className="container h-30 p-2 d-flex rounded bg-gray-700 justify-content-center align-items-center border">
            <CreateGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
