import Head from 'next/head'
import Layout from '../components/layout'
import CrimeReporting from '../sections/crimeReporting'
import CultureWriting from '../sections/cultureWriting'
import ColdDeadHands from '../sections/coldDeadHands'
import LongIsland from '../sections/longIslandSerialKiller'

const Publications = () => (
  <Layout>
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
              font-size: 16px;
              width: calc(100%-200px);
              line-height: 2em;
              text-align: left;
              margin-bottom: 5%;
            }
            @media (max-width: 700px){ 
              #container {
               display: flex;
               flex-direction: column;
               margin-left: 1em;
             }
             #container img{
               width: 300px;
             }
           }
          `}
        </style>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossOrigin='anonymous'
          />
          <title>Ellen Killoran || Publications - Long Island Serial Killer, Crime Reporting, Culture Writing</title>
          <meta name='description' content={`Ellen Killoran's investigative articles as seen in Forbes,The L Magazine, IBTimes, Rolling Stone, New York Observer, and Maxim`} />
        </Head>
        <LongIsland />
        <ColdDeadHands />
        <CrimeReporting />
        <CultureWriting />
      </div>
  </Layout>
)

export default Publications
