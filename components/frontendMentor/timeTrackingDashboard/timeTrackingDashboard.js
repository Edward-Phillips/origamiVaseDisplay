import Head from "next/head";
import styles from "./timeTrackingDashboard.module.scss";
import timeTrackingData from "./data.js";
import React, { useState, useEffect } from "react";
import timeCard from './timeCard.js';

export default function timeTrackingDashboard() {
  const [data, setData] = useState(timeTrackingData);
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
                src="./images/image-jeremy.png"
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
          {data.map((item, index) => {
            <timeCard
              key={`timecard${index}`}
              data={item}
              selected={selected}
              className={styles.timecard}
            />;
          })}
        </div>
      </main>
    </>
  );
}
