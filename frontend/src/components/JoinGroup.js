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
        <label htmlFor="joinGroup" style={{ display: "block" }}>
          Join Group
        </label>
        <input
          className="p-1"
          id="joinGroup"
          type="text"
          placeholder="Enter your group code"
          value={passcode}
          onChange={handleChange}
        />
        <button className="btn btn-primary mx-3" type="submit">
          Join
        </button>
      </form>
    </div>
  );
}
