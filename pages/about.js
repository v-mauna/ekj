import Head from 'next/head'
import Layout from '../components/layout'

const About = () => (  
    <Layout>     
  <div className='container'>
    <style jsx>
      {`
      .container {
        position: absolute;
        top:25%;
        font-size: 16px;
        width: 100vw;
        line-height: 2em;
        justify-content: center;
        align-content: center;
        text-align: left;
      }
        p {
          font-family: 'Spectral', serif;
          font-weight: 550;
        }
      `}
    </style>
    <Head>
      <title>Ellen Killoran: About</title>
    </Head>
    <p>
      Ellen is a seasoned journalist and former media & entertainment reporter
      with a taste for true crime. Formerly a senior editor at IBTimes, her work
      has appeared in Forbes, Rolling Stone, Maxim, NYMag, Indiewire, and more.
      She co-produced the HBO documentary "Youth Knows No Pain" and appeared in
      a documentary series that aired alongside the Lifetime movie "Manson's
      Lost Girls." 
    </p>
  </div>
  </Layout>
)

export default About
