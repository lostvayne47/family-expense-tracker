import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroup } from "../redux/actions/groups";

export default function CreateGroup() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    groupName: "",
    groupDesc: "",
  });

  function handleChange(event) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents form submission & page reload

    if (state.groupName !== "" && state.groupDesc !== "") {
      dispatch(createGroup(state));
    }
    setState({
      groupName: "",
      groupDesc: "",
    });
  }

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
          className="p-1 my-2 rounded w-100 text-black"
          id="groupName"
          name="groupName"
          type="text"
          placeholder="Enter your group name"
          value={state.groupName} // Fixed
          onChange={handleChange}
        />
        <input
          className="p-1 my-2 rounded w-100 text-black"
          id="groupDesc"
          name="groupDesc"
          type="text"
          placeholder="Enter your group description"
          value={state.groupDesc} // Fixed
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
