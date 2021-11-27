import Layout from '../components/LayoutComponents/layout';
import Sidebar from '../components/LayoutComponents/sidebar';
import ProfessionalTimeline from '../components/Timeline/ProfessionalTimeline';
import styles from './index.module.scss';
export default function Index() {
  return (
    <div className={styles.indexContainer}>
      <section className={styles.descriptionContainer}>
        <h2>About</h2>
        <p>
          This is a website I am building to improve my skills in frontend development.
        </p>
        <article className={styles.articlePanel}>
          <h3>Who am I?</h3>
          <p>
            I'm Ed, I am a full stack developer, currently working in react and Laravel, I also fold origami and do terrible drawings. Most of my side projects are written in react or node.I have recently been implementing typescript where convenient and am a big fan.
            </p>
            <p>
            I recommend you check out the Origami Vase Design page, it's a project I'm quite proud of to help me design origami vases, or scroll down to have a look at a timeline of my professional life.
          </p>
        </article>
      </section>
      <ProfessionalTimeline />
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
