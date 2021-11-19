import Layout from '../components/LayoutComponents/layout'
import Sidebar from '../components/LayoutComponents/sidebar'

export default function Index() {
  return (
    <>
      <section>
        <h2>This is the home page</h2>
        <p>
          This is a website I am building to improve my skills in frontend development. You'll probably be able to tell which part of the site I started on, I'll try to keep a log here of what order things were added so as to give some context.
        </p>
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
