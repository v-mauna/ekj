import Head from 'next/head'
import Layout from '../components/layout'
const Articles = () => (
  <Layout>
  <div className='container'>
    <Head>
      <title>Ellen Killoran - Articles</title>
    </Head>
    <style jsx>
    {`
    .container {
      position: absolute;
      left: 25%;
      top: 10%;
      margin-left: 2em;
      font-size: 16px;
      width: 50vw;
      line-height: 2em;
      justify-content: center;
      align-content: center;
      text-align: left;
    }
    p {
      font-family: 'Spectral', serif;
      font-weight: 550;
    }
  `}</style>
    <p>Writings</p>
  </div>
  </Layout>
)

export default Articles
