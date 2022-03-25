import React from "react";
import defaultValues from "../SVGDragAndDrop/defaultValues";
import styles from "./CreasePattern.module.scss";
import GoreStrip from "./GoreStrip";

function SVGCreasePatternContainer({
  pointsArray,
  goreWidth,
  goreNumber,
  componentRef,
}: {
  pointsArray: Array<any>;
  goreWidth: number;
  goreNumber: number;
  componentRef: any;
}) {
  if (goreNumber === undefined) {
    goreNumber = 30;
  }

  const maxcx = Math.max(...pointsArray.map((p) => p.cx));

  // function to calculate length of line from array of points
  const lengthAlongLine = (pointsArray: Array<any>): number => {
    let length = 0;
    for (let i = 0; i < pointsArray.length - 1; i++) {
      length += Math.sqrt(
        Math.pow(pointsArray[i].cx - pointsArray[i + 1].cx, 2) +
          Math.pow(pointsArray[i].cy - pointsArray[i + 1].cy, 2)
      );
    }
    return length;
  };
  // function to return a gorestrip at a given position
  const makeGore = (gorePosition: number) => {
    return (
      <GoreStrip
        key={`gore${gorePosition}`}
        pointsArray={pointsArray}
        goreWidth={goreWidth}
        maxcx={maxcx}
        gorePosition={gorePosition}
      />
    );
  };

  // function to determine the viewbox of the svg based on the width and height of the svg
  const getViewBox = (): string => {
    return `0 0 ${goreNumber * goreWidth} ${lengthAlongLine(pointsArray)}`;
  };

  //function to return 4 black lines tracing the outline of the SVG with the max height at lengthalongline(pointsArray) and the max width at goreWidth * goreNumber
  const makeOutline = () => {
    return (
      <>
        <line
          x1={0}
          y1={0}
          x2={0}
          y2={lengthAlongLine(pointsArray)}
          style={{ stroke: "black" }}
        />
        <line
          x1={0}
          y1={0}
          x2={goreNumber * goreWidth}
          y2={0}
          style={{ stroke: "black" }}
        />
        <line
          x1={goreNumber * goreWidth}
          y1={0}
          x2={goreNumber * goreWidth}
          y2={lengthAlongLine(pointsArray)}
          style={{ stroke: "black" }}
        />
        <line
          x1={goreNumber * goreWidth}
          y1={lengthAlongLine(pointsArray)}
          x2={0}
          y2={lengthAlongLine(pointsArray)}
          style={{ stroke: "black" }}
        />
      </>
    );
  };

  return (
    <div className={styles.svgWrapper}>
      <svg
        ref={componentRef}
        className={styles.creasePatternSVG}
        viewBox={getViewBox()}
      >
        <g>
          {Array(goreNumber ? goreNumber : 30)
            .fill(0)
            .map((_, i) => makeGore(i))}
          {makeOutline()}
        </g>
      </svg>
    </div>
  );
}

export default SVGCreasePatternContainer;
