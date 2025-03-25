import React from "react";
import GroupItem from "./GroupItem.js";
export default function GroupSection({ groups }) {
  return (
    <div className="min-h-[200px] d-flex flex-wrap gap-2 justify-content-center overflow-auto">
      {groups?.length === 0 ? (
        <h1>Please create or join a group to view it here</h1>
      ) : (
        groups?.map((group, index) => {
          return <GroupItem key={index} group={group} />;
        })
      )}
    </div>
  );
}
