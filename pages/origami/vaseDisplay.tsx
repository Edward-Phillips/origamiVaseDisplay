import type { NextPage } from 'next';
import Head from 'next/head';
import SVGDragAndDropContainer from '../../components/origamiVase/SVGDragAndDrop/SVGDragAndDropContainer';

const VaseDisplay: NextPage = () => {
  return (
    <div>
      <Head >
        <title>Vase Display</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <h1 style={{textAlign: "center"}}>Vase Display</h1>
      <SVGDragAndDropContainer />
    </main>
    </div>
  )
}

export default VaseDisplay
