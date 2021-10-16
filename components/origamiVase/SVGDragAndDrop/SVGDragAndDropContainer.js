import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import SVGCreasePatternContainer from '../SVGCreasePattern/SVGCreasePatternContainer';
import SVGDragAndDrop from './SVGDragAndDrop';
import styles from './SVGDragAndDropContainer.module.css';
import defaultValues from './defaultValues';

export default function SVGContainer() {

  const [points, setPoints] = React.useState(defaultValues.points);
  // set up gore Number, default is 10
  const [goreNumber, setGoreNumber] = React.useState(defaultValues.goreNumber);
  // set up gore width, default is 10
  // set up gore height, default is 100
  const [goreLength, setGoreLength] = React.useState(defaultValues.goreLength);
  // set up totalWidth, default is 300
  const [totalWidth, setTotalWidth] = React.useState(defaultValues.totalWidth);

  const [displayCreasePattern, setDisplayCreasePattern] = React.useState(defaultValues.displayCreasePattern);
  const [creasePatternPointsArray, setCreasePatternPointsArray] = React.useState(Object.keys(points).map(p => points[p]));
  const [realTimeDisplay , setRealTimeDisplay] = React.useState(defaultValues.realTimeDisplay);
  const componentRef = useRef(defaultValues.compRef);
  
  const pointsArray = Object.keys(points).map(p => points[p]);
  const maxcx = Math.max(...pointsArray.map(p => p.cx));
  const goreWidth = totalWidth/goreNumber;
  
  const mapPointsToSVGPoints = () => {
    return Object.keys(points).map((pointKey) => <SVGDragAndDrop key={`SVG: ${pointKey}`} coords={points[pointKey]} setCoords={updateValueInPointsObject} />);
  } 

  const updateValueInPointsObject = (key, value) => {
    setPoints({...points, [key]: value});
  }

  const addPointToPointsObject = () => {
    const newKey = `point${Object.keys(points).length}`;
    const newPoint = {cx: 50, cy: 50, key: newKey};
    points[newKey] = newPoint;
    setPoints({...points});
  }

  const removeLastPointFromPointsObject = () => {
    const lastKey = Object.keys(points).pop();
    delete points[lastKey];
    setPoints({...points});
  }

  const shouldAddPolyline= () => {
    return Object.keys(points).length > 1;
  }

  const generatePolylinePointsStringFromPointsObject = () => {
    const pointsString = Object.keys(points).map((pointKey) => {
      return `${points[pointKey].cx},${points[pointKey].cy}`;
    }).join(" ");
    return pointsString;
  }

  const generatePolyLine = () => {
    return <polyline points={generatePolylinePointsStringFromPointsObject()} fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
  }

  const updateCreasePatternPointsArray = () => {
    setCreasePatternPointsArray(pointsArray);
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.SVGOuterContainer}>
        <div className={styles.svgContainer}>
          <svg viewBox="0 0 100 100" className={styles.dragAndDropSVG}>
            {shouldAddPolyline() ? generatePolyLine() : null}
            {mapPointsToSVGPoints()}
          </svg>
        </div>
        <div className={styles.description}>
          <div>
            <h2>What is this thing??</h2>
            <p>The box with the black line going through all the blue circles represents the cross section of a vase, by moving the blue circles around you change the shape of the crease pattern below (scroll down!). Unless you are an advanced user/familiar with <a href="http://rebecca.gieseking.us/2013/03/tutorial-designing-pleated-forms-2/">the maths behind this</a>, it is recommended to leave the pleat width, number, length & total width settings alone. If you've made a vase why not try printing it out and folding it?</p>
          </div>
          <div className={styles.SVGControls}>
            <button onClick={addPointToPointsObject}>Add Point</button>
            <button onClick={removeLastPointFromPointsObject}>Remove Last Point</button>
            <div className={styles.goreInputs}>
              <label htmlFor="gore-number-input">Pleat Number:</label>
              <input id="gore-number-input" type="number" onChange={(e) => setGoreNumber(e.target.value)} value={goreNumber}></input>
              <label htmlFor="gore-width-input">Pleat Width:</label>
              <input id="gore-width-input" type="number" readOnly value={goreWidth}></input>
              <label htmlFor="gore-height--input">Pleat length:</label>
              <input id="gore-height-input" type="number" onChange={(e) => setGoreLength(e.target.value)} value={goreLength}></input>
              <label htmlFor="total-width-input">Total Width:</label>
              <input id="total-width-input" type="number" onChange={(e) => setTotalWidth(e.target.value)} value={totalWidth} min={maxcx * maxcx * Math.PI/ 100}></input>
              <label htmlFor="gore-width-input">Display Crease Pattern:</label>
              <button id="gore-width-input" onTouch={(e) => setDisplayCreasePattern(!displayCreasePattern)} onClick={(e) => setDisplayCreasePattern(!displayCreasePattern)}>{displayCreasePattern ? 'Hide' : 'Display'} Crease Pattern</button>
              {displayCreasePattern && <><label htmlFor="gore-width-input">Toggle updating Crease Pattern in real time?</label>
              <input id="gore-width-input" type="checkbox" checked={realTimeDisplay} onTouch={(e) => setRealTimeDisplay(!realTimeDisplay)} onClick={(e) => setRealTimeDisplay(!realTimeDisplay)}></input></>}
              {!realTimeDisplay && displayCreasePattern && <><label htmlFor="gore-width-input">Update Crease Pattern</label>
              <button id="gore-width-input" onTouch={() => updateCreasePatternPointsArray()} onClick={() => updateCreasePatternPointsArray()}>Update Crease Pattern</button> </>}
              {displayCreasePattern && <ReactToPrint
          trigger={() => <button>Print out crease pattern</button>}
          content={() => componentRef.current}
        />}
            </div>
          </div>
        </div>
      </div>
      {displayCreasePattern && <SVGCreasePatternContainer 
        componentRef={componentRef}
        pointsArray={realTimeDisplay ? pointsArray : creasePatternPointsArray}
        goreWidth={goreWidth}
        goreNumber={goreNumber}/>}
    </div>
  );
}
