import Layout from '../components/LandingPage/layout'
import Sidebar from '../components/LandingPage/sidebar'

export default function About() {
  return (
    <section>
      <h2>about me</h2>
      <p>
        I'm Ed, I am a software engineer, I also fold origami and do terrible drawings. My code is slightly better. Usually.
      </p>
      <p> I am a full stack developer, currently working in react and Laravel. Most of my side projects are written in react or node. I have recently been implementing typescript where convenient and am a big fan.
      </p>
      <p>
        I swear I'm more interesting than this, I'm just really struggling at the moment to think of anything, I'll come back  here when I think of something interesting, in the meantime why not take a minute or two out of your day and watch <a target="_blank" href="https://www.youtube.com/watch?v=1JOwfKLdRt8">this video about where the phrase dead as a doornail came from</a>.
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
