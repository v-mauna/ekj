import Sidebar from './sidebar'
import Footer from './footer'
import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <title>Ellen Killoran</title>
    </Head>
    <Sidebar />
    <div className="container">
    {props.children}
    </div>
    <Footer/>
  </div>
)

export default Layout
