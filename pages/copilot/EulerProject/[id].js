import Head from 'next/head';
import Layout from '../../../components/LayoutComponents/layout';
import Sidebar from '../../../components/LayoutComponents/sidebar';


export async function getStaticPaths() {
  // currently I only have 7 solved problems, so I'm going to map over an array of length 7 and return the paths for each problem
  const paths = [];
  for (let i = 1; i <= 7; i++) {
    paths.push({ params: { id: i.toString() } });
  }
  return {paths: paths, fallback: false};
};

export async function getStaticProps({ params }) {
  const { id } = params;
  const problem = await import(`../../../components/projectEuler/p${id}`);
  return {
    props: {
      problem: JSON.stringify(problem[`p${id}`]),
    },
  };
}

const ProblemPage = ({problem}) => {
  problem = JSON.parse(problem);
  return (
    <>
      <Head >
        <title>Project Euler Problems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <h1 style={{textAlign: "center"}}>Project Euler Problem solution by Github Copilot {problem.id}</h1>
      <h2>Problem {problem.id}</h2>
      <p>{problem.function}</p>
      <p>{problem.comment}</p>
    </main>
    </>
  )
}


ProblemPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default ProblemPage;
