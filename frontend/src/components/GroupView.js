import React from "react";
import Group from "./Group.js";
export default function GroupView({ groups }) {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center overflow-auto">
      {groups?.map((group) => {
        return <Group group={group} />;
      })}
    </div>
  );
}
