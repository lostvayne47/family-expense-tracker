import React, { useState } from "react";

export default function JoinGroup() {
  const [passcode, setPasscode] = useState("");
  function handleChange(event) {
    setPasscode(event.target.value);
  }
  function handleSubmit() {}
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
