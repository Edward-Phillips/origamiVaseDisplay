import Layout from '../components/LayoutComponents/layout'
import Sidebar from '../components/LayoutComponents/sidebar'

export default function Index() {
  return (
    <>
      <section>
        <h2>Home</h2>
        <p>
          This is a website I am building to improve my skills in frontend development.
        </p>
      <article>
        <h3>About me</h3>
        <p>
          I'm Ed, I am a software engineer, I also fold origami and do terrible drawings. My code is slightly better. Usually.
        </p>
        <p>
          I am a full stack developer, currently working in react and Laravel. Most of my side projects are written in react or node. I have recently been implementing typescript where convenient and am a big fan.
        </p>
    </article>
      </section>
    </>
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
