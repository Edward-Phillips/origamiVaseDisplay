import Head from 'next/head';
import Layout from '../../../components/LayoutComponents/layout'
import Sidebar from '../../../components/LayoutComponents/sidebar'



const EulerProject = () => {
  return (
    <>
      <Head >
        <title>Project Euler Problems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <h1 style={{textAlign: "center"}}>Project Euler Problems</h1>
      <p>
        <a href="https://projecteuler.net/">Project Euler</a> is a series of challenging mathematical/computer programming problems.
        This site is a collection of solutions to the problems. Except this time, the problems will be solved by Github Copilot. I will be feeding in a description of the problem to Github Copilot and then the solution will be posted here.
      </p>
    </main>
    </>
  )
}

EulerProject.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default EulerProject;
