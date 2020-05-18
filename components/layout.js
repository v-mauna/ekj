import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <title>Ellen Killoran</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Karla&family=Spectral&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Navbar />
    <div className="container">
    {props.children}
    </div>
    <Footer/>
  </div>
)

export default Layout
