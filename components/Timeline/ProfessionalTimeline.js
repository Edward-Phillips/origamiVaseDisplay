import React from 'react';
import { Chrono } from "react-chrono";
import timelineData from './TimelineData';
import styles from './ProfessionalTimeline.module.scss';

export default function ProfessionalTimeline() {
  return (
    <div className={styles.timelineContainer}>
    <Chrono
      items={timelineData}
      mode="VERTICAL_ALTERNATING"
      hideControls
      disableNavOnKey
      useReadMore={false}
      cardWidth={450}
      />
    </div>
  );
}

