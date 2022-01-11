import Head from "next/head";
import Layout from "../../../components/LayoutComponents/layout";
import Sidebar from "../../../components/LayoutComponents/sidebar";
import Markdown from 'markdown-to-jsx';
import { PrismaClient } from '@prisma/client'

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const eulerProblems = await prisma.eulerproblem.findMany();
  prisma.$disconnect();
  const paths = [];
  for (let i = 1; i <= eulerProblems.length; i++) {
    paths.push({ params: { id: i.toString() } });
  }
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const prisma = new PrismaClient();
  const problem = await await prisma.eulerproblem.findUnique({
    where: {
      id: Number(id),
    },
  });
  prisma.$disconnect();
  return {
    props: {
      problem: JSON.stringify(problem),
    },
  };
}

const ProblemPage = ({ problem }) => {
  problem = JSON.parse(problem);
  const problemCode = '```javascript' + '\n' + problem.function + '\n' + '```';
  return (
    <>
      <Head>
        <title>{problem.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 style={{ textAlign: "left" }}>
          {problem.title}
        </h1>
        <p style={{ textAlign: "left" }}>{problem.statement}</p>
        <Markdown style={{ textAlign: "left" }, {margin: "auto"}} options={{ forceBlock: true }}>
          {problemCode}
        </Markdown>
        <p style={{ textAlign: "left" }}>{problem.comment}</p>
        <p style={{ textAlign: "left" }}>{problem.thoughts}</p>
      </main>
    </>
  );
};

ProblemPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export default ProblemPage;
