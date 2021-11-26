import Layout from '../components/LayoutComponents/layout'
import Sidebar from '../components/LayoutComponents/sidebar'

export default function About() {
  return (
    <section>
      <h2>about me</h2>
      <p>
        I'm Ed, I am a software engineer, I also fold origami and do terrible drawings. My code is slightly better. Usually.
      </p>
      <p> I am a full stack developer, currently working in react and Laravel. Most of my side projects are written in react or node. I have recently been implementing typescript where convenient and am a big fan.
      </p>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
