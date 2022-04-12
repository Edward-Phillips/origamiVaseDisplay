import React, { useEffect } from "react";

const TimeCard = ({ data, selected }) => {
  useEffect(() => {
    console.log({data});
    }, []);
  return (
    <div>
      <div>{data.title}</div>
      <div>{selected}</div>
    </div>
  );
}

export default TimeCard;
