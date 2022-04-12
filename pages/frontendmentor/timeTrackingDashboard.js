import React, { useEffect, useState } from "react";
import Head from "next/head";
// import styles from "./timeTrackingDashboard.module.scss";
import timeTrackingData from "components/frontendMentor/timeTrackingDashboard/data.js";
import TimeCard from 'components/frontendMentor/timeTrackingDashboard/timeCard.js';
import image from 'components/frontendMentor/timeTrackingDashboard/images/image-jeremy.png';

const styles = {};

const timeTrackingDashboard = () => {
  const [selected, setSelected] = useState("daily");

  return (
    <>
      <Head>
        <title>Time Tracking Dashboard</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.usercard}>
            <div className={styles.usercardUpperSection}>
              <img
                className={styles.usercardPhoto}
                src={image}
              />
              <div className={styles.usercardNameSection}>
                <div className={styles.usercardTitle}>Report for</div>
                <div className={styles.usercardName}>Jeremy Robson</div>
              </div>
            </div>
            <div className={styles.usercardLower}>
              <div className={styles.dailyButton}>Daily</div>
              <div className={styles.weeklyButton}>Weekly</div>
              <div className={styles.monthlyButton}>Monthly</div>
            </div>
          </div>
          <>
            {timeTrackingData.map((item, index) => 
              <TimeCard
                key={`timecard${index}`}
                data={item}
                selected={selected}
                className={styles.timecard}
              />
              )}
          </>
        </div>
      </main>
    </>
  );
}

export default timeTrackingDashboard;
