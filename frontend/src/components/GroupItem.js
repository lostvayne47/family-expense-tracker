import React from "react";

export default function GroupItem({ group }) {
  return (
    <div
      className="border border-gray-500 p-4 m-3 text-center flex flex-col justify-center items-center bg-gray-800 text-gray-300 rounded-lg shadow-md"
      style={{ minWidth: "200px", minHeight: "200px" }}
    >
      <p className="text-lg font-semibold text-gray-100">
        {group?.groupName || "Name"}
      </p>
      <p className="text-gray-400">{group?.groupDesc || "Description"}</p>
      <br />
      <p className="text-gray-400">{group?.groupPasscode || "Passcode"}</p>
    </div>
  );
}
