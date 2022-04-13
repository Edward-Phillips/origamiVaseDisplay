import React, { useEffect } from "react";
// import styles from './timeCard.module.scss';

const TimeCard = ({ data, selected }) => {
  // useEffect(() => {
  //   console.log({data});
  //   }, []);
  const getTimeFrameName = () => {
    switch (selected) {
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
      case "daily":
        return "Yesterday";
      default:
        return "Last Week";
    }
  }
  return (
    <div>
      <div>{data.title}</div>
      <div>{selected}</div>
      <div>{data.timeframes[selected].current}hrs</div>
      <div>{getTimeFrameName()} - {data.timeframes[selected].previous}hrs</div>
    </div>
  );
}

export default TimeCard;
