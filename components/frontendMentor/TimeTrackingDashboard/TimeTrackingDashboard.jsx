import React, { useEffect, useState } from "react";
import styles from "./timeTrackingDashboard.module.scss";
import timeTrackingData from "components/frontendMentor/timeTrackingDashboard/data.js";
import TimeCard from "components/frontendMentor/timeTrackingDashboard/timeCard.js";
import image from "components/frontendMentor/timeTrackingDashboard/images/image-jeremy.png";
import Image from "next/image";

const TimeTrackingDashboard = () => {
  const [selected, setSelected] = useState("daily");

  useEffect(() => {
    console.log(styles);
  }, []);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
      </style>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.usercard}>
            <div className={styles.usercardUpperSection}>
              <div className={styles.usercardPhoto}>
                <Image src={image} />
              </div>
              <div className={styles.usercardNameSection}>
                <div className={styles.usercardTitle}>Report for</div>
                <div className={styles.usercardName}>
                  Jeremy <br /> Robson
                </div>
              </div>
            </div>
            <div className={styles.usercardLowerSection}>
              <div
                className={styles.dailyButton}
                onClick={() => setSelected("daily")}
              >
                Daily
              </div>
              <div
                className={styles.weeklyButton}
                onClick={() => setSelected("weekly")}
              >
                Weekly
              </div>
              <div
                className={styles.monthlyButton}
                onClick={() => setSelected("monthly")}
              >
                Monthly
              </div>
            </div>
          </div>
          <div className={styles.timeCardsContainer}>
            {timeTrackingData.map((item, index) => (
              <TimeCard
                key={`timecard${index}`}
                data={item}
                selected={selected}
                className={styles.timecard}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default TimeTrackingDashboard;
