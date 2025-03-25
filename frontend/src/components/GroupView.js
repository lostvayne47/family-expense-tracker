import React from "react";
import GroupItem from "./GroupItem.js";
export default function GroupView({ groups }) {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center overflow-auto">
      {groups?.map((group) => {
        return <GroupItem group={group} />;
      })}
    </div>
  );
}
