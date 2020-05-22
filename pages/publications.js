import Head from 'next/head'
import Layout from '../components/layout'
import CrimeReporting from '../sections/crimeReporting'
import CultureWriting from '../sections/cultureWriting'
import ColdDeadHands from '../sections/coldDeadHands'
import LongIsland from '../sections/longIslandSerialKiller'

const Publications = () => (
  <Layout>
    <div className='container'>
      <style jsx>
        {`
          .container {
            position: absolute;
            left: 15%;
            top: 10%;
            margin-left: 2em;
            font-size: 16px;
            width: 70vw;
            line-height: 2em;
            justify-content: center;
            align-content: center;
            text-align: left;
            min-height: 100vh;
            margin-bottom: 200px;
          }

          #header {
            font-family: 'Spectral', serif;
            font-size: 20px;
            margin-bottom: 4%;
            font-weight: 200;
            justify-content: center;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          #pub-desc {
            margin: 1em 0 10px 10%;
            font-size: 16px;
            line-height: 1.5em;
            width: 50%;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 800;
            font-family: 'Karla', sans-serif;
          }

          #pub-link {
            text-decoration: none;
            color: black;
            font-size: 12px;
            font-style: italic;
            font-family: 'Questrial', sans-serif;
            margin: 0 0 20% 10%;
            border-bottom: 1px dashed;
          }
          #writings #pub-link:hover {
            color: rgba(0, 0, 0, 0.5);
          }

          .pub-img {
            width: 30%;
            margin-top: 3em;
            margin-left: 10%;
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
  </Layout>
)

export default Publications
