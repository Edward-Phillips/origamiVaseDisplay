import Layout from '../components/LandingPage/layout'
import Sidebar from '../components/LandingPage/sidebar'

export default function Contact() {
  return (
    <section>
      <h2>GET IN TOUCH</h2>
      <ul>
        <li>
          <a href="mailto:edwardphillipswastaken@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.gitbhub.com/Edward-Phillips">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/edward-phillips-0240611a6/">LinkedIn</a>
        </li>
      </ul>
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
