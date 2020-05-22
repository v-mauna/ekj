import Head from 'next/head'
import Layout from '../components/layout'
import CrimeReporting from '../sections/crimeReporting'
import CultureWriting from '../sections/cultureWriting'
import ColdDeadHands from '../sections/coldDeadHands'
import LongIsland from '../sections/longIslandSerialKiller'

const Publications = () => (
  <Layout>
    <div id='publications'>
      <div id='container'>
        <style jsx>
          {`#publications{
            display: block;

          }
            #container{
              position: absolute;
              margin-bottom: auto;
              top: 7.5%;
              left: 15%;
              margin-left: 2em;
              font-size: 16px;
              width: 70vw;
              line-height: 2em;
              min-height: 100vh;
              padding: 0;
              margin-bottom: auto;
              justify-content: center;
              align-content: center;
              text-align: left;
              min-height: 100vh;
            }

          `}
        </style>
        <Head>
          <title>Ellen Killoran || Publications</title>
          <meta name='description' content='' />
        </Head>
        <LongIsland />
        <ColdDeadHands />
        <CrimeReporting />
        <CultureWriting />
      </div>
    </div>
  </Layout>
)

export default Publications
