import React, { useState } from "react";

export default function CreateGroup() {
  const [state, setState] = useState({
    groupName: "",
    groupDesc: "",
  });
  function handleChange(event) {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {}
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="createGroup"
          className="text-white"
          style={{ display: "block" }}
        >
          <b>Create Group</b>
        </label>
        <input
          className="p-1 my-2 rounded w-100"
          id="groupName"
          name="groupName"
          type="text"
          placeholder="Enter your group name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          className="p-1 my-2 rounded w-100"
          id="groupDesc"
          groupDesc="groupDesc"
          type="text"
          placeholder="Enter your group description"
          value={state.desc}
          onChange={handleChange}
        />
        <button
          className="btn btn-success"
          style={{ display: "block" }}
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
