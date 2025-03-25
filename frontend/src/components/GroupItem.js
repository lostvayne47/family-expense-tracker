import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteGroup } from "../redux/actions/groups";

export default function GroupItem({ group }) {
  const dispatch = useDispatch();
  function handleDelete(event) {
    event.preventDefault();

    dispatch(deleteGroup({ groupId: group._id }));
  }
  return (
    <div
      className="border border-gray-500 p-4 m-3 text-center flex flex-col justify-center items-center bg-gray-800 text-gray-300 rounded-lg shadow-md transition-transform duration-300 cursor-pointer hover:scale-110 hover:bg-green-700 relative"
      style={{ minWidth: "200px", minHeight: "200px" }}
    >
      <p className="text-lg font-semibold text-gray-100">
        {group?.groupName || "Name"}
      </p>
      <p className="text-gray-400">{group?.groupDesc || "Description"}</p>
      <br />
      <p className="text-gray-400">{group?.groupPasscode || "Passcode"}</p>

      {/* Delete button positioned inside the card */}
      <div
        className="absolute bottom-2 right-2 p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-200 "
        onClick={handleDelete}
      >
        <MdDeleteForever size={20} color="red" />
      </div>
    </div>
  );
}
