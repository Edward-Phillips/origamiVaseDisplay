import React, { useEffect } from "react";
import styles from "./timeCard.module.scss";
import Image from "next/image";

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
  };
  return (
    <div>
      <div className={styles.timeCardUpperSection} style={{backgroundColor: `${data.color}`}}>
        <Image height={50} width={50} src={`/images/${data.image}`} />
      </div>
      <div>
        <div>{data.title}</div>
        <div>{data.timeframes[selected].current}hrs</div>
        <div>
          {getTimeFrameName()} - {data.timeframes[selected].previous}hrs
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
