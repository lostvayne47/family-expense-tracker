import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { joinGroup } from "../redux/actions/groups";

export default function JoinGroup() {
  const [passcode, setPasscode] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    setPasscode(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (passcode !== "") {
      dispatch(joinGroup({ groupPasscode: passcode }));
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="joinGroup"
          className="text-white"
          style={{ display: "block" }}
        >
          <b>Join Group</b>
        </label>
        <input
          className="p-1 my-2 rounded w-100 text-black"
          id="joinGroup"
          type="text"
          placeholder="Enter your group code"
          value={passcode}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary"
          style={{ display: "block" }}
          type="submit"
        >
          Join
        </button>
      </form>
    </div>
  );
}
