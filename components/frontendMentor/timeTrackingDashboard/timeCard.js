import React from "react";

export default function timeTrackingDashboard({ data, selected }) {
  return (
    <div>
      <div>{data.title}</div>
      <div>{selected}</div>
    </div>
  );
}
