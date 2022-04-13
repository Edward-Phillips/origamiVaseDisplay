import React, { useEffect, useState } from "react";
import Head from "next/head";
import TimeTrackingDashboard from 'components/frontendMentor/TimeTrackerDashboard/TimeTrackingDashboard.jsx';

const timeTracker = () => {

  return (
    <>
      <Head>
        <title>Time Tracker</title>
      </Head>
      <TimeTrackingDashboard />
    </>
  );
}

export default timeTracker;
