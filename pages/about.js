import Head from 'next/head'
import CrimeCon from './images/CrimeCon.jpg'
import Layout from '../components/layout'

const About = () => (
  <Layout>
  <div className='wrapper'>
    <div className='container'>
      <style jsx>
        <link
          href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
          rel='stylesheet'
        />
        {`
        .wrapper {
          display: block;
          position: relative;
          margin-left: 300px;
          margin-bottom: 200px;
        }

        .container {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex-wrap: wrap;
          top: 2em;
          box-sizing: border-box;
          font-size: 16px;
          width: calc(100%-${'300px'});
          line-height: 2em;
          justify-content: center;
          align-content: center;
          text-align: left;
        }
        .container p {
          font-family: 'Spectral', serif;
          font-weight: 500;
          width: 700px;
          margin-bottom: 100px;
        }
        #main-img {
          position: relative;
          top: 0;
          margin-bottom: 20px;
          width: 700px;
        }


          @media (max-width: 700px) {
            .container {
              display: flex;
              flex-direction: column;
              width: 100vw;
              left: 0;
              padding: 1em;
              align-content: center;
            }
            #main-img {
              margin-bottom: 20px;
              left: 0;
              width: 400px;
            }

            .container p {
              font-size: 12px;
              width: 400px;
              left: 0;
              margin-left: 0;
              text-align: left;
              line-height: 1.6em;
            }
           
          }
        `}
      </style>
      <Head>
        <script
          src='https://kit.fontawesome.com/6f92a9206c.js'
          crossOrigin='anonymous'
        />
        <meta
          name='description'
          content='Ellen Killoran is a seasoned journalist and former media & entertainment reported features in Forbes, Rolling Stone,
        IBTimes, Maxim, Crime Online, & The L Magazine'
        />
        <title>Ellen Killoran || About</title>
      </Head>
      <img id='main-img' alt='Ellen Killoran at CrimeCon' src={CrimeCon} />
      <p>
        Ellen Killoran is a seasoned journalist and former media & entertainment
        reporter with a taste for true crime. Formerly a senior editor at
        IBTimes, her work has appeared in Forbes, Rolling Stone, Maxim, NYMag,
        Indiewire, and more. She co-produced the HBO documentary "Youth Knows No
        Pain" and appeared in a documentary series that aired alongside the
        Lifetime movie "Manson's Lost Girls."
      </p>
      
    </div>
  </div>
  </Layout>
)

export default About
