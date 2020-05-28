import Head from 'next/head'
import Layout from '../components/layout'
import CrimeReporting from '../sections/crimeReporting'
import CultureWriting from '../sections/cultureWriting'
import ColdDeadHands from '../sections/coldDeadHands'
import LongIsland from '../sections/longIslandSerialKiller'

const Publications = () => (
  <Layout>
    <div className='wrapper'>
      <div id='container'>
        <style jsx>
          {`
            .wrapper {
              display: block;
            }

            #container {
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              margin-left: 20%;
              margin-top: -30%;
              font-size: 16px;
              width: 75vw;
              line-height: 2em;
              justify-content: center;
              align-content: center;
              text-align: left;
              margin-bottom: 5%;
            }
          `}
        </style>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossOrigin='anonymous'
          />
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
