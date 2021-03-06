import Head from "next/head";
import Link from "next/link";
import Layout from "components/LayoutComponents/layout";
import Sidebar from "components/LayoutComponents/sidebar";
import Markdown from "markdown-to-jsx";
import { PrismaClient } from "@prisma/client";
import styles from "./eulerProblem.module.scss";

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
  const problem = await prisma.eulerproblem.findUnique({
    where: {
      id: Number(id),
    },
  });
  const totalProblems = await prisma.eulerproblem.findMany();
  prisma.$disconnect();
  return {
    props: {
      problem: JSON.stringify(problem),
      totalProblems: JSON.stringify(totalProblems.length),
    },
  };
}

const ProblemPage = ({ problem, totalProblems }) => {
  const parsedProblem = JSON.parse(problem);
  const parsedTotalProblems = JSON.parse(totalProblems)
  const problemCode = "```javascript" + "\n" + parsedProblem.function + "\n" + "```";
  return (
    <>
      <Head>
        <title>{parsedProblem.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={styles.container}>
          <div className={styles.titleAndSubNav}>
            <div className={styles.back}><Link href={`${parsedProblem.number > 1 ? `${parsedProblem.number-1}` : "/copilot/EulerProject"}`}>{"<"}</Link></div>
            <div className={styles.title}>
              <h1>{parsedProblem.title}</h1>
            </div>
            <div className={styles.forwards}><Link href={`${parsedProblem.number < totalProblems ? `${parsedProblem.number+1}` : "/copilot/EulerProject"}`}>{">"}</Link></div>
          </div>
          <div className={styles.problemStatement}>
            <p style={{ textAlign: "left" }}>{parsedProblem.statement}</p>
          </div>
          <div className={styles.generatingComment}>
            <h3>Comment used to generate the code:</h3>
            <p style={{ textAlign: "left" }}>{parsedProblem.comment}</p>
          </div>
            <Markdown
              className={styles.codedSolution}
              style={({ textAlign: "left" }, {overflow: "wrap"}, { margin: "auto" })}
              options={{ forceBlock: true }}
            >
              {problemCode}
            </Markdown>
          <div className={styles.thoughts}>
            <h3>Thoughts:</h3>
            <p style={{ textAlign: "left" }}>{parsedProblem.thoughts}</p>
          </div>
        </div>
      </section>
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
