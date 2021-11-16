import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/LandingPage/layout'
import Sidebar from '../../components/LandingPage/sidebar'



const projectEuler: NextPage = () => {
  return (
    <>
      <Head >
        <title>Project Euler Problems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <h1 style={{textAlign: "center"}}>Project Euler Problems</h1>
      <p>
        <a href="https://projecteuler.net/">Project Euler</a> is a collection of problems that are solved by computer.
        This site is a collection of solutions to the problems. Except this time, the problems will be solved by a computer. Github Copilot to be exact. I will be feeding in a description of the problem to github copilot and then the solution will be posted to this site.
      </p>
    </main>
    </>
  )
}

projectEuler.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default projectEuler
