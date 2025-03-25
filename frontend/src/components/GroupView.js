import React from "react";
import Group from "./Group.js";
export default function GroupView() {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center overflow-auto">
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
    </div>
  );
}
