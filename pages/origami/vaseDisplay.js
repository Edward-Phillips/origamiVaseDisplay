import Head from 'next/head';
import Layout from '../../components/LandingPage/layout';
import Sidebar from '../../components/LandingPage/sidebar';
import SVGDragAndDropContainer from '../../components/origamiVase/SVGDragAndDrop/SVGDragAndDropContainer';

const VaseDisplay = () => {
  return (
    <>
      <Head >
        <title>Vase Display</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <h1 style={{textAlign: "center"}}>Vase Display</h1>
      <SVGDragAndDropContainer />
    </main>
    </>
  )
}

VaseDisplay.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default VaseDisplay
